/* eslint-disable camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('goals_users').del()
    .then(() => {
      return knex('goals_users').insert([{
        id: 1,
        user_id: 1,
        goal_id: 1,
      },{
        id: 2,
        user_id: 1,
        goal_id: 2
      },{
        id: 3,
        user_id: 1,
        goal_id: 3
      },{
        id: 4,
        user_id: 1,
        goal_id: 4
      },{
        id: 5,
        user_id: 2,
        goal_id: 5
      },{
        id: 6,
        user_id: 2,
        goal_id: 6
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('goals_users_id_seq', (SELECT MAX(id) FROM goals_users));"
      );
    });
};
