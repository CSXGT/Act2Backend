const db = require('../models/conexion')

class CategoriaController {
  // Mostrar categoria
  Mostrar(res) {
    const sql = 'SELECT * FROM categoria';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener categoria:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }

  // Buscar un categoria según id
  Buscar(res, categoria) {
    const id = +categoria;
    const sql = 'SELECT * FROM categoria WHERE ID_CATEGORIA = ?';

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log('Error al buscar categoria por ID:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }
}

const controller = new CategoriaController();
module.exports = controller;