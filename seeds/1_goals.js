/* eslint-disable camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('goals').del()
    .then(() => {
      return knex('goals').insert([{
        id: 1,
        goal_name: 'Write a book'
      },{
        id: 2,
        goal_name: 'Bring lunch from home'
      },{
        id: 3,
        goal_name: 'Run a marathon'
      },{
        id: 4,
        goal_name: 'Pay off student loans'
      },{
        id: 5,
        goal_name: 'Dunk a basketball'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('goals_id_seq', (SELECT MAX(id) FROM goals));"
      );
    });
};
