const { Router } = require("express");
const Product = require("./model");
const auth = require("../auth/middleWare");

const router = new Router();

router.post("/product", async (request, response, next) => {
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
    response.send(productsArray, response);
  } catch (error) {
    next(console.error);
  }
});

module.exports = router;
