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

    // Buscar un patrocinantes según id
    Buscar(res, patrocinantes) {
      const id = +patrocinantes;
      const sql = 'SELECT * FROM patrocinantes WHERE ID_PATROCINANTE = ?';
  
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar patrocinantes por ID:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.json(result);
        }
      });
    }
}

const controller = new PatrocinantesController();
module.exports = controller;