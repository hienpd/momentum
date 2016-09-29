'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// Get users with goal_id
router.get('/goals_users/goal_id/:goalId', checkAuth, (req, res, next) => {
  knex('goals_users')
    .select('users.username')
    .join('users', 'users.id', '=', 'goals_users.user_id')
    .where('goal_id', decamelizeKeys(req.params.goalId))
    .then((result) => {
      res.send(result);  // return into ids variable
    })
    .catch((err) => {
      next(err);
    });
});

// Get goals with username
router.get('/goals_users/username/:username', checkAuth, (req, res, next) => {
  knex('goals_users')
    .join('users', 'users.id', '=', 'goals_users.user_id')
    .join('goals', 'goals.id', '=', 'goals_users.goal_id')
    .select('goal_name')
    .where('username', req.params.username)
    .then((goals) => {
      res.send(goals);
    })
    .catch((err) => {
      next(err);
    });
});

// Save new row to goals_users, but find user_id first
router.post('/goals_users', checkAuth, (req, res, next) => {
  knex('users')
    .select('id')
    .where('username', req.body.username)
    .then((users) => {
      const userId = users[0].id;
      const row = { goalId: req.body.goalId, userId };

      return knex('goals_users')
        .insert(decamelizeKeys(row), '*');
    })
    .then((goalUser) => {
      res.send(goalUser[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
