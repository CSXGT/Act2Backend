const db = require('../models/conexion')

class EquiposController {
  // Mostrar Equipos
  Mostrar(res) {
    const sql = 'SELECT * FROM equipos';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener equipos:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }
}

const controller = new EquiposController();
module.exports = controller;