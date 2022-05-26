const express = require("express");
const app = express();
const Product = require("./models/product");

app.use(express.json());

app.post("/add", (req, res) => {
  const { product, quantity, price } = req.body;
  Product.create({
    product: product,
    quantity: quantity,
    price: price,
  });
  res.status(201).json({ message: "Produto adicionado com sucesso" });
});

app.get("/get", (req, res) => {
  Product.findAll().then((result) => res.json(result));
});

app.get("/get/:id", (req, res) => {
  Product.findByPk(req.params.id).then((result) => res.json(result));
});

app.delete("/delete/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: "Produto excluido com sucesso" });
});

app.put("/edit/:id", (req, res) => {
  Product.update(
    {
      product: req.body.product,
      quantity: req.body.quantity,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json({ message: "Produto editado com sucesso" });
});

app.listen(8080, console.log("Servidor rodando na porta 8080"));
