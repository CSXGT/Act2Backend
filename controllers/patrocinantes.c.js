const db = require('../models/conexion')

class PatrocinantesController {
  // Mostrar patrocinantes
  Mostrar(res) {
    const sql = 'SELECT * FROM patrocinantes';

    db.query(sql, (err, result) => {
      if (err) {s
        console.log('Error al obtener patrocinantes:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }
}

const controller = new PatrocinantesController();
module.exports = controller;