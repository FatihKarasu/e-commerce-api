const express = require("express");
const{products}=require("../data/products")
const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:productId", (req, res) => {
  let productId= req.params.productId;
  let result = products.filter((p)=>(p.id===productId))

  res.json(result);
});
router.get("/search/:query", (req, res) => {
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


