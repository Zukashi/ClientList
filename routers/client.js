const express = require('express');
const { db } = require('../utils/db');

const clientRouter = express.Router();

clientRouter
  .get('/', (req, res) => {
    res.render('client/list-all', {
      clients: db.getAll(),
    });
  })

  .get('/:id', (req, res) => {
    res.render('client/one', {
      client: db.getOne(req.params.id),
    });
  })

  .post('/', (req, res) => {
    res.send('Dodaj');
    console.log(req.body);
  })

  .put('/:id', (req, res) => {
    res.send('Zmodyfikuj');
  })

  .delete('/:id', (req, res) => {
    db.delete(req.params.id);
    res.render('client/deleted');
  })
  .get('/form/add', (req, res) => {
    res.render('client/forms/add');
  });

module.exports = {
  clientRouter,
};