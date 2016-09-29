'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// Count rows that have completed_at containing a certain month
// select * from (select count(*), date_trunc( 'day', created_at ) from steps group by date_trunc( 'day', created_at )) as foo where date_trunc = '2016-09-21';
router.get('/steps/count/:username/:month', checkAuth, (req, res, next) => {
  const { username, month } = req.params;

  knex('users')
    .select('id')
    .where('username', username)
    .first()
    .then((response) => {
      return knex.raw(`select * from (select count(*), date_trunc( 'month', completed_at ) from steps where user_id = ${response.id} group by date_trunc( 'month', completed_at )) as foo where date_trunc = '${month}-01'`)
    })
    .then((completedSteps) => {
      if (!completedSteps.rows[0]) {
        res.send('0')
      }
      else {
        res.send(completedSteps.rows[0].count);
      }
    })
    .catch((err) => {
      next(err);
    });
});

// Get a goal's steps via its goal_id
router.get('/steps/goal/:goalId', checkAuth, (req, res, next) => {
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
  const { stepName, goalName, userId, completedAt } = req.body;

  knex('goals')
    .select('id')
    .where('goal_name', goalName)
    .then((goals) => {
      const goalId = goals[0].id;

      return knex('steps')
        .insert(decamelizeKeys({ stepName, goalId , userId, completedAt }), '*');
      })
    .then((steps) => {
      res.send(steps[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
