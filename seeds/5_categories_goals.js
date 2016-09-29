/* eslint-disable camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('categories_goals').del()
    .then(() => {
      return knex('categories_goals').insert([{
        id: 1,
        user_id: 1,
        goal_id: 1,
      },{
        id: 2,
        user_id: 1,
        goal_id: 2
      },{
        id: 3,
        user_id: 2,
        goal_id: 2
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('categories_goals_id_seq', (SELECT MAX(id) FROM categories_goals));"
      );
    });
};
