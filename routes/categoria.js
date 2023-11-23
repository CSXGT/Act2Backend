const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/categoria.c");

// Mostrar categoria
router.get('/', function(req, res, next) {
  CategoriaController.Mostrar(res);
});

// Buscar un categoria según id
router.get("/:id", function(req, res, next) {
  CategoriaController.Buscar(res, req.params.id);
});

module.exports = router;