'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// Get all steps, probably not useful
router.get('/steps', (_req, res, next) => {
  knex('steps')
    .orderBy('id')
    .then((steps) => {
      res.send(steps);
    })
    .catch((err) => {
      next(err);
    });
});

// Get a goal's steps via its goal_id
router.get('/steps/:goalId', checkAuth, (req, res, next) => {
  knex('steps')
    .select('*')
    .where('goal_id', req.params.goalId)
    .then((steps) => {
      res.send(steps);
    })
    .catch((err) => {
      next(err);
    });
});

// Save a step, with the step_name and goal_name
router.post('/steps', checkAuth, (req, res, next) => {
  const { stepName, goalName } = req.body;

  knex('goals')
    .select('id')
    .where('goal_name', goalName)
    .then((goals) => {
      const goalId = goals[0].id;

      return knex('steps')
        .insert(decamelizeKeys({ stepName, goalId }), '*');
      })
    .then((steps) => {
      res.send(steps[0]);
    })
    .catch((err) => {
      next(err);
    });
    });

module.exports = router;
