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
        goal_name: 'Plan a party'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('goals_id_seq', (SELECT MAX(id) FROM goals));"
      );
    });
};
