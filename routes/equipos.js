const express = require("express");
const router = express.Router();
const EquiposController = require("../controllers/equipos.c");

// Mostrar Equipos
router.get('/', function(req, res, next) {
  EquiposController.Mostrar(res);
});

module.exports = router;