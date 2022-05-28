const express = require("express");
const {
  products,
  productDetails,
  getProductDetail,
  getColor,
  getSize,
} = require("../data/products");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:productId", (req, res) => {
  let productId = req.params.productId;
  let completeProduct;
  products.forEach((p) => {
    if (p.productDetailId === productId) {
      completeProduct = {
        id: p.productDetailId,
        categoryId: p.categoryId,
        detail: getProductDetail(p.productDetailId),
        variants: [{ color: getColor(p.colorId), size: getSize(p.sizeId) }],
      };
    }
  });

  res.json(completeProduct);
});

router.get("/search/:query", (req, res) => {
  let query = req.params.query;
  let result = [];
  let count = 0;
  let max = 5;
  for (let index = 0; index < productDetails.length && count < max; index++) {
    if (
      productDetails[index].title.toLowerCase().includes(query.toLowerCase()) ||
      productDetails[index].description
        .toLowerCase()
        .includes(query.toLowerCase())
    ) {
      result.push(productDetails[index]);
      count++;
    }
  }
  res.json(result);
});

module.exports = router;
