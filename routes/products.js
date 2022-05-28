const express = require("express");
const {
  getProducts,
  getProductDetails,
} = require("../data/products");
const router = express.Router();

router.get("/", (req, res) => {
  let products = getProducts();
 
  res.json(products);
});

router.get("/:productId", (req, res) => {
  let products = getProducts();
 
  res.json(getProductDetails());
});

router.get("/details", (req, res) => {
  let products = getProducts();
  
  res.json(getProductDetails());
});

router.get("/search/:query", (req, res) => {
  let products = getProducts();
  let query = req.params.query;
  let result = products.filter(
    (p, index) =>
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())) &&
      index < 5
  );

  res.json(result);
});

module.exports = router;
