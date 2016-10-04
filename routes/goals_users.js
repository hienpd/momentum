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

// Save new data to goals_users AND goals AND steps
router.post('/goals_users', checkAuth, (req, res, next) => {
  knex('goals')
    .insert(decamelizeKeys({ goalName: req.body.goalName }), '*')
    .then((goals) => {
      const goalId = goals[0].id;
      const row = { goalId, userId: req.body.userId };

      return knex('goals_users')
        .insert(decamelizeKeys(row), '*');
    })
    .then((goalUser) => {
      return Promise.all(req.body.steps.map((step) => {
        return knex('steps').insert({
          step_name: step,
          goal_id: goalUser[0].goal_id
        })
      }))
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
