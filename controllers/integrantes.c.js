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

    // Buscar un integrantes según id
    Buscar(res, integrantes) {
      const id = +integrantes;
      const sql = 'SELECT * FROM integrantes WHERE ID_INTEGRANTES = ?';
  
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar integrantes por ID:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.json(result);
        }
      });
    }

      // Ingresar una integrantes
  Ingresar(res, integrantes) {
    const sql = 'INSERT INTO integrantes SET ?';

    db.query(sql, integrantes, (err, result) => {
      if (err) {
        console.log('Error al ingresar integrantes:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }
}

const controller = new IntegrantesController();
module.exports = controller;