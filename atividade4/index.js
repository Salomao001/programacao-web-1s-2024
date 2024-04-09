const express = require("express");
const { somar, subtrair, multiplicar, dividir } = require("./calculadora");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/somar/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const resultado = somar(a, b);
  res.send(`Resultado da soma: ${resultado}`);
});

app.get("/subtrair/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const resultado = subtrair(a, b);
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const resultado = multiplicar(a, b);
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get("/dividir/:a/:b", (req, res) => {
  const { a, b } = req.params;
  if (b === "0") {
    res.status(400).send("Erro: Divisão por zero.");
  } else {
    const resultado = dividir(a, b);
    res.send(`Resultado da divisão: ${resultado}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
