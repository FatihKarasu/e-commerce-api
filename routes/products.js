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
    title: "Iphone 11",
    image: "images/iphone11.jpeg",
    description:
      "Apple’dan yeni bir iPhone 11 satın alın, ücretsiz teslimat ve ücretsiz iadeden yararlanın.",
    price: "1200",
  },
  {
    id: 2,
    title: "Airpods",
    image: "images/airpods.jpeg",
    description:
      "Dinamik kafa izleme özellikli uzamsal ses teknolojisine sahip 3. nesil AirPods ile tanışın. Apple.com’da ücretsiz gönderim ile.",
    price: "1200",
  },
  {
    id: 3,
    title: "Macbook Pro",
    image: "images/macbookpro.webp",
    description:
      "18.399,00 Ücretsiz kargo. Öğrenci, Öğretmen ve Eğitim Kurumlarına özel indirimlerle hemen alın",
    price: "18.399",
  },
];
