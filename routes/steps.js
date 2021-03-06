'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');
const { decamelizeKeys, camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// Count rows that have completed_at containing a certain month
router.get('/steps/countByMonth/:username/:month', checkAuth, (req, res, next) => {
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
        res.send('0');
      }
      else {
        res.send(completedSteps.rows[0].count);
      }
    })
    .catch((err) => {
      next(err);
    });
});

// Count how many steps have been completed within a goal
router.get('/steps/countByGoal/:goalId', checkAuth, (req, res, next) => {
  const { goalId } = req.params;

  knex('steps')
    .count('completed_at')
    .where('goal_id', goalId)
    .first()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
});

// Count how many steps total within a goal
router.get('/steps/countTotal/:goalId', checkAuth, (req, res, next) => {
  const { goalId } = req.params;

  knex('steps')
    .count('*')
    .where('goal_id', goalId)
    .first()
    .then((response) => {
      res.send(response);
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
      res.send(camelizeKeys(steps));
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

// Edit a step
router.patch('/steps/:stepId', checkAuth, (req, res, next) => {
  const id = Number.parseInt(req.params.stepId);

  knex('steps')
    .where('id', id)
    .first()
    .then((step) => {
      const { stepName, completedAt, userId } = req.body;
      const updateStep = {};

      if (stepName) {
        updateStep.stepName = stepName;
      }

      if (completedAt || completedAt === null) {
        updateStep.completedAt = completedAt;
      }

      return knex('steps')
        .update(decamelizeKeys(updateStep), '*')
        .where('id', id)
    })
    .then((results) => {
      const updatedStep = camelizeKeys(results[0]);

      res.send(updatedStep);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
