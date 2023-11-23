const express = require("express");
const router = express.Router();
const ModalidadController = require("../controllers/modalidad.c");

// Mostrar modalidad
router.get('/', function(req, res, next) {
  ModalidadController.Mostrar(res);
});

module.exports = router;