'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');
const { decamelizeKeys, camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// Get all the goals
router.get('/goals', (_req, res, next) => {
  knex('goals')
    .orderBy('id')
    .then((goals) => {
      res.send(goals);
    })
    .catch((err) => {
      next(err);
    });
});

// Get a goal's details
router.get('/goals/goal_id/:goalId', checkAuth, (req, res, next) => {
  const { goalId } = req.params;
  knex('goals')
    .where('id', parseInt(goalId))
    .then((goals) => {
      res.send(camelizeKeys(goals[0]));
    })
    .catch((err) => {
      next(err);
    });
});

// Get a user's goals
router.get('/goals/username/:username', checkAuth, (req, res, next) => {
  knex('users')
    .select('goal_id', 'goal_name', 'deadline', 'target')
    .orderBy('goal_id')
    .where('username', req.params.username)
    .join('goals_users', 'users.id', '=', 'goals_users.user_id')
    .join('goals', 'goals.id', '=', 'goals_users.goal_id')
    .then((goals) => {
      res.send(goals);
    })
    .catch((err) => {
      next(err);
    });
});

// Save a new goal
// router.post('/goals', checkAuth, (req, res, next) => {
//   const { goalName, deadline, target } = req.body;
//
//   knex('goals')
//     .insert(decamelizeKeys({ goalName, deadline, target }), '*')
//     .then((goals) => {
//       res.send(goals[0]);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;
