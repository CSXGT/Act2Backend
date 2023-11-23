const express = require("express");
const router = express.Router();
const PatrocinantesController = require("../controllers/patrocinantes.c");

// Mostrar patrocinantes
router.get('/', function(req, res, next) {
  PatrocinantesController.Mostrar(res);
});

// Buscar un patrocinantes según id
router.get("/:id", function(req, res, next) {
  PatrocinantesController.Buscar(res, req.params.id);
});

module.exports = router;