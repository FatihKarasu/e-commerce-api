const { categories } = require("./categories");

const PRODUCT_AMOUNT = 2000;
const PRODUCT_DETAIL_AMOUNT = 200;

var colors = [
  {
    id: 1,
    name: "Red",
    hexCode: "#f00",
  },
  {
    id: 2,
    name: "Green",
    hexCode: "#0f0",
  },
  {
    id: 3,
    name: "Blue",
    hexCode: "#00f",
  },
  {
    id: 4,
    name: "Yellow",
    hexCode: "#ff0",
  },
  {
    id: 5,
    name: "Fuchsia",
    hexCode: "#f0f",
  },
  {
    id: 6,
    name: "Aqua",
    hexCode: "#0ff",
  },
  {
    id: 7,
    name: "White",
    hexCode: "#fff",
  },
  {
    id: 8,
    name: "Black",
    hexCode: "#000",
  },
];

var sizes = [
  {
    id: 1,
    name: "Extra Small",
    abbr: "XS",
  },
  {
    id: 2,
    name: "Small",
    abbr: "S",
  },
  {
    id: 3,
    name: "Medium",
    abbr: "M",
  },
  {
    id: 4,
    name: "Large",
    abbr: "L",
  },
  {
    id: 5,
    name: "Extra Large",
    abbr: "XL",
  },
];

var productDetails = [];
var products = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateProductDetails = () => {
  let catLength = categories.length;
  let mainCatLength = categories.filter((c) => c.categoryId === null).length;
  for (let index = 0; index < PRODUCT_DETAIL_AMOUNT; index++) {
    let detail = {
      id: "product-" + index,
      categoryId: categories[getRandomInt(mainCatLength, catLength - 1)].id,
      title: "Product " + index,
      image: `images/product${getRandomInt(1, 4)}.jpg`,
      description: "Product Description " + 1,
      price: `${getRandomInt(50, 500)}`,
      old_price: "",
    };
    if (getRandomInt(1, 6) === 6) {
      detail.old_price = detail.price;
      detail.price = getRandomInt(40, parseInt(detail.old_price) - 1);
    }
    productDetails.push(detail);
  }
};

const generateProducts = () => {
  generateProductDetails();

  for (let index = 0; index < PRODUCT_AMOUNT; index++) {
    let rand = getRandomInt(0, productDetails.length - 1);
    let product = {
      id: `${index}`,
      categoryId: productDetails[rand].categoryId,
      productDetailId: productDetails[rand].id,
      colorId: colors[getRandomInt(0, colors.length - 1)].id,
      sizeId: sizes[getRandomInt(0, sizes.length - 1)].id,
    };
    products.push(product);
  }
};

const getProducts = () => {
  return products;
};
const getProductDetails = () => {
  return productDetails;
};

const getColor = (colorId) => {
  let color;
  colors.forEach((c) => {
    if (c.id === colorId) {
      color = c;
      return;
    }
  });
  return color;
};
const getSize = (sizeId) => {
  let size;
  sizes.forEach((s) => {
    if (s.id === sizeId) {
      size = s;
      return;
    }
  });
  return size;
};
const getProductDetail = (detailId) => {
  let detail;
  productDetails.forEach((pd) => {
    if (pd.id === detailId) {
      detail = pd;
      return;
    }
  });
  return detail;
};
generateProducts();

module.exports = {
  products,
  productDetails,
  getProducts,
  getProductDetails,
  getProductDetail,
  getSize,
  getColor,
};
