/* eslint-disable max-len, camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('steps').del()
    .then(() => {
      return knex('steps').insert([{
        id: 1,
        goal_id: 1,
        step_name: 'Write roughdraft',
        user_id: 1,
        completed_at: new Date('2016-06-26 14:26:16 UTC')
      },{
        id: 2,
        goal_id: 1,
        step_name: 'Revise draft'
      },{
        id: 3,
        goal_id: 1,
        step_name: 'Edit'
      },{
        id: 4,
        goal_id: 1,
        step_name: 'Proofread'
      },{
        id: 5,
        goal_id: 1,
        step_name: 'Publish'
      },{
        id: 6,
        goal_id: 2,
        step_name: 'Reserve party room'
        completed_at: new Date('2016-09-20 14:26:16 UTC')
        user
      },{
        id: 7,
        goal_id: 2,
        step_name: 'Send invites'
        completed_at: new Date('2016-09-21 14:26:16 UTC')
      },{
        id: 8,
        goal_id: 2,
        step_name: 'Make a playlist'
        completed_at: new Date('2016-09-22 14:26:16 UTC')
      },{
        id: 9,
        goal_id: 2,
        step_name: 'Order pizza'
        completed_at: new Date('2016-09-23 14:26:16 UTC')
      },{
        id: 10,
        goal_id: 2,
        step_name: 'Buy drinks'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps));"
      );
    });
};
