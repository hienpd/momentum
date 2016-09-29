'use strict';

const { checkAuth } = require('../middleware');
const express = require('express');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// Get categories by user's goal
router.get('/categories/:goalId', checkAuth, (req, res, next) => {
  const { goalId } = req.params;

  knex('categories_goals')
    .where('goal_id', goalId)
    .join('categories', 'categories.id', '=', 'categories_goals.category_id')
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

// Save new row to categories_goals, but find user_id first
router.post('/categories_goals', checkAuth, (req, res, next) => {
  knex('users')
    .select('id')
    .where('username', req.body.username)
    .then((users) => {
      const userId = users[0].id;
      const row = {
        goalId: req.body.goalId,
        categoryId: req.body.categoryId
      };

      return knex('categories_goals')
        .insert(decamelizeKeys(row), '*');
    })
    .then((catGoal) => {
      res.send(catGoal[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
