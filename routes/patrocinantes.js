const express = require("express");
const router = express.Router();
const PatrocinantesController = require("../controllers/patrocinantes.c");

// Mostrar patrocinantes
router.get('/', function(req, res, next) {
  PatrocinantesController.Mostrar(res);
});

module.exports = router;