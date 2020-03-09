const { Router } = require("express");
const Product = require("./model");
const auth = require("../auth/middleWare");
const cron = require("node-cron");
var moment = require("moment");

const router = new Router();

router.post("/product", async (request, response, next) => {
  try {
    // console.log("--the PRODUCT form req--", request.body);
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

    //calculating number of days remaining
    const newArr = productsArray.map(prod => {
      const item = prod.dataValues;
      var een = moment(prod.dataValues.warranty_end_date);
      var twee = new Date();
      var duration = moment.duration(een.diff(twee));
      item.daysRemaining = Math.floor(duration.as("days"));
      return item;
    });
    //console.log("the pdt arr = ", newArr);
    response.send(newArr);
  } catch (error) {
    next(console.error);
  }
});

router.delete("/product", async (request, response, next) => {
  try {
    const productToRemove = await Product.findByPk(request.query.productId);
    const deleteProd = await productToRemove.destroy();
    response.send(productToRemove);
  } catch (error) {
    next(console.error);
  }
});

// scheduler for running something at regular interval
// cron.schedule("* * * * *", function() {
//   console.log("running a task every minute");
// });

module.exports = router;
