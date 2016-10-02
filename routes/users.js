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

// Get user's details
router.get('/users/:username', (req, res, next) => {
  knex('users')
    .where('username', req.params.username)
    .first()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

// Register a new user
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
