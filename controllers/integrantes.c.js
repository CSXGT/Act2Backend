const db = require('../models/conexion')

class IntegrantesController {
  // Mostrar integrantes
  Mostrar(res) {
    const sql = 'SELECT * FROM integrantes';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener integrantes:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }
}

const controller = new IntegrantesController();
module.exports = controller;