const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.listen(5000);

app.get("/", (req, res) => {
  res.json({ message: "asds" });
});

const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");


app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

