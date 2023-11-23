const db = require('../models/conexion')

class ModalidadController {
  // Mostrar modalidad
  Mostrar(res) {
    const sql = 'SELECT * FROM modalidad';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener modalidad:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }
}

const controller = new ModalidadController();
module.exports = controller;