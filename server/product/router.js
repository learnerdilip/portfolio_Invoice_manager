const { Router } = require("express");
const Product = require("./model");

const router = new Router();

router.post("/product", async (request, response, next) => {
  try {
    const productCreate = Product.create(request.body);
    response.send(productCreate);
  } catch (error) {
    next(console.error);
  }
});

module.exports = router;
