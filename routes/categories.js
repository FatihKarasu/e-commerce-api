const express = require("express");
const { categories } = require("../data/categories");
const {
  products,
  getColor,
  getSize,
  getProductDetail,
} = require("../data/products");
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
  let start = parseInt(req.query.start);
  let limit = parseInt(req.query.limit);

  let result = [];
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
  let filteredProducts=[]
  if (isMain()) {
    filteredProducts = products.filter((p) => p.categoryId.startsWith(categoryId));
  } else {
    filteredProducts = products.filter((p) => p.categoryId === categoryId);
  }
  let count = 0;
  filteredProducts.forEach((p, index) => {
    let isExist = false;
    result.forEach((r) => {
      if (r.id === p.productDetailId) {
        let variant = {
          color: getColor(p.colorId),
          size: getSize(p.sizeId),
        };
        let duplicate = false;
        r.variants.forEach((v) => {
          if (
            v.color.id === variant.color.id &&
            v.size.id === variant.size.id
          ) {
            duplicate = true;
            return;
          }
        });
        if (!duplicate) r.variants.push(variant);
        isExist = true;
        return;
      }
    });
    if (!isExist) {
      let completeProduct = {
        id: p.productDetailId,
        categoryId: p.categoryId,
        detail: getProductDetail(p.productDetailId),
        variants: [{ color: getColor(p.colorId), size: getSize(p.sizeId) }],
      };
      count++;
      result.push(completeProduct);
    }
  });
  result = result.slice(start, start + limit);
  res.json(result);
});

module.exports = router;
