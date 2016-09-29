'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');

// eslint-disable-next-line new-cap
const router = express.Router();

// Get all the categories
router.get('/categories', (_req, res, next) => {
  knex('categories')
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      next(err);
    });
});

// Save a new category
router.post('/categories', checkAuth, (req, res, next) => {
  const { category } = req.body;

  knex('categories')
    .insert({ category }, '*')
    .then((categories) => {
      res.send(categories[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
