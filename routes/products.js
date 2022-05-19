const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});
router.post("/", (req, res) => {
  res.send("projects");
});
router.get("/:projectId", (req, res) => {
  let projectId = req.params.projectId;

  res.send(projectId);
});

module.exports = router;

let products = [
  {
    id: 1,
    title: "Red Dress",
    image: "images/product1.jpg",
    description:
      "Happiness dress",
      price: "279.99",
      old_price: "319.99",
  },
  {
    id: 2,
    title: "Yellow Dress",
    image: "images/product2.jpg",
    description:
      "Indian kashmiri kaftaan",
    price: "229.99",
    old_price: "249.99",

  },
  {
    id: 3,
    title: "Green Dress",
    image: "images/product3.jpg",
    description:
      "A beautiful long green dress on a hanger on a white wall",
    price: "219.99",
    old_price: "249.99"

  },
  {
    id: 4,
    title: "Red Dress 2",
    image: "images/product4.jpg",
    description:
      "A beautiful red dress",
    price: "189.99",
    old_price: "199.99"
  },
];
