/* eslint-disable camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('categories_goals').del()
    .then(() => {
      return knex('categories_goals').insert([{
        id: 1,
        goal_id: 2,
        category_id: 1
      },{
        id: 2,
        goal_id: 2,
        category_id: 2,
      },{
        id: 3,
        goal_id: 3,
        category_id: 1
      },{
        id: 4,
        goal_id: 4,
        category_id: 2
      },{
        id: 5,
        goal_id: 5,
        category_id: 1
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('categories_goals_id_seq', (SELECT MAX(id) FROM categories_goals));"
      );
    });
};
