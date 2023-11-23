const express = require("express");
const router = express.Router();
const IntegrantesController = require("../controllers/integrantes.c");

// Mostrar integrantes
router.get('/', function(req, res, next) {
  IntegrantesController.Mostrar(res);
});

// Buscar un integrantes según id
router.get("/:id", function(req, res, next) {
  IntegrantesController.Buscar(res, req.params.id);
});

// Ingresar un integrantes
router.post('/', function(req, res, next) {
  IntegrantesController.Ingresar(res, req.body);
});

// Modificar un integrantes
router.put("/:id", function(req, res, next) {
  IntegrantesController.Modificar(res, req.params.id, req.body);
});


module.exports = router;