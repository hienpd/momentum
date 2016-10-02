'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');
const boom = require('boom');

// const ev = require('express-validation');
// const validations = require('../validations/users');

router.get('/users', (req, res, next) => {
  knex('users')
    .select('username')
    .orderBy('id')
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/users', (req, res, next) => {
  const { username, password, firstName, lastName, avatarUrl } = req.body;

  knex('users').where('username', username)
    .then((users) => {
      if (users.length > 0) {
        throw boom.create(400, 'username already exists');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      return knex('users')
        .insert(decamelizeKeys({ username, hashedPassword, firstName, lastName, avatarUrl }));
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
