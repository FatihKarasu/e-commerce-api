const express = require("express");
const { categories } = require("../data/categories");
const { products } = require("../data/products");
const router = express.Router();

// Get Main Categories
router.get("/", (req, res) => {
  res.json(categories.filter((c) => c.categoryId === null));
});

// Get Sub Categories of a Category
router.get("/:categoryId", (req, res) => {
  res.json(categories.filter((c) => c.categoryId === req.params.categoryId));
});

// Get Products of a Category
router.get("/:categoryId/products", (req, res) => {
  let categoryId = req.params.categoryId;
  let result;
  const isMain = () => {
    let exist = false;
    categories.forEach((category) => {
      if (categoryId === category.id && category.categoryId === null) {
        exist = true;
        return true;
      }
    });
    return exist;
  };

  if (isMain()) {
    result = products.filter((p) => p.categoryId.includes(categoryId));
  } else {
    result = products.filter((p) => p.categoryId === categoryId);
  }

  res.json(result);
});
module.exports = router;
