const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/categoria.c");

// Mostrar categoria
router.get('/', function(req, res, next) {
  CategoriaController.Mostrar(res);
});

module.exports = router;