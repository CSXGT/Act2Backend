const express = require("express");
const router = express.Router();
const IntegrantesController = require("../controllers/integrantes.c");

// Mostrar integrantes
router.get('/', function(req, res, next) {
  IntegrantesController.Mostrar(res);
});

module.exports = router;