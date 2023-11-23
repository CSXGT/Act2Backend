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

// Ingresar un categoria
router.post('/', function(req, res, next) {
  CategoriaController.Ingresar(res, req.body);
});

module.exports = router;