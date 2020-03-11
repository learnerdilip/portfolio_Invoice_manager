const { Router } = require("express");
const Product = require("./model");
const auth = require("../auth/middleWare");
const cron = require("node-cron");
const moment = require("moment");
const MailingList = require("../mailing/model");

const router = new Router();

router.post("/product", auth, async (request, response, next) => {
  try {
    console.log("--the PRODUCT form req--", request.body);
    const productCreated = await Product.create({
      document_name: request.body.documentName,
      name_on_invoice: request.body.nameOnInvoice,
      device_name: request.body.deviceName,
      purchase_date: request.body.purchaseDate,
      warranty_start_date: request.body.warrantyStartDate,
      warranty_end_date: request.body.warrantyEndDate,
      warranty_doc_image: request.body.warrantyDocument,
      other_image: request.body.miscellaneousImage,
      roomId: request.body.roomId
    });

    //adding to the mailnig list
    const userEmail = request.user.dataValues.email; //find user email
    const addToMailing = await MailingList.create({
      email_id: userEmail,
      product_id: productCreated.dataValues.id,
      total_warranty: findTotalDays(productCreated),
      remaining_warranty: findRemainingDays(productCreated)
    });

    // const ChangedProd = productCreated;

    // const daysFind = await MailingList.findOne({
    //   where: {
    //     product_id: ChangedProd.dataValues.id
    //   }
    // });

    // ChangedProd.dataValues.totalwarrantydays =
    //   daysFind.dataValues.total_warranty;
    // ChangedProd.dataValues.remianingWarrantyDays =
    //   daysFind.dataValues.remaining_warranty;

    response.send(productCreated);
  } catch (error) {
    next(console.error);
  }
});

router.get("/products", async (request, response, next) => {
  try {
    const productsArray = await Product.findAll({
      where: { roomId: request.query.roomId }
    });
    response.send(productsArray);
  } catch (error) {
    next(console.error);
  }
});

router.put("/product", async (request, response, next) => {
  try {
    // console.log("the request for edit", request.body);
    const findProd = await Product.findByPk(request.body.id);
    (findProd.document_name = request.body.documentName),
      (findProd.name_on_invoice = request.body.nameOnInvoice),
      (findProd.device_name = request.body.deviceName),
      (findProd.purchase_date = request.body.purchaseDate),
      (findProd.warranty_start_date = request.body.warrantyStartDate),
      (findProd.warranty_end_date = request.body.warrantyEndDate),
      findProd.save();
    response.send(findProd);
  } catch (error) {
    next(console.error);
  }
});

router.delete("/product", async (request, response, next) => {
  try {
    const productToRemove = await Product.findByPk(request.query.productId);
    const deleteProd = await productToRemove.destroy();
    const ProdMailToRemove = await MailingList.findOne({
      where: { product_id: request.query.productId }
    });
    const deleteMail = await ProdMailToRemove.destroy();

    response.send(productToRemove);
  } catch (error) {
    next(console.error);
  }
});

// scheduler for running something at regular interval
// cron.schedule("* * * * *", function() {
//   console.log("running a task every minute");
// });

const findRemainingDays = product => {
  const item = product.dataValues; //the item is a databse type object
  var een = moment(item.warranty_end_date);
  var twee = new Date();
  var duration = moment.duration(een.diff(twee));
  const daysRemaining = Math.floor(duration.as("days"));
  // console.log("---the ramining days", daysRemaining);
  return daysRemaining; //a item with days remaining property
};

const findTotalDays = product => {
  const item = product.dataValues;
  const een = moment(item.warranty_end_date);
  const twee = moment(item.warranty_start_date);
  const duration = moment.duration(een.diff(twee)).days();
  // console.log("---the Total duration days", duration);
  return duration;
};

module.exports = router;
