const express = require("express");
const router = express.Router();
const ModalidadController = require("../controllers/modalidad.c");

// Mostrar modalidad
router.get('/', function(req, res, next) {
  ModalidadController.Mostrar(res);
});

// Buscar un modalidad según id
router.get("/:id", function(req, res, next) {
  ModalidadController.Buscar(res, req.params.id);
});


module.exports = router;