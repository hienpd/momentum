/* eslint-disable max-len, camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('steps').del()
    .then(() => {
      return knex('steps').insert([{
        id: 1,
        goal_id: 1,
        step_name: 'Create world bible',
        completed_at: '2016-01-03 10:23:54-08',
        user_id: 1
      },{
        id: 2,
        goal_id: 1,
        step_name: 'Create character bible',
        completed_at: '2016-01-05 10:23:54-08',
        user_id: 1
      },{
        id: 3,
        goal_id: 1,
        step_name: 'Outline story',
        completed_at: '2016-01-06 10:23:54-08',
        user_id: 1
      },{
        id: 4,
        goal_id: 1,
        step_name: 'Revise draft',
        completed_at: '2016-02-19 10:23:54-08',
        user_id: 1
      },{
        id: 5,
        goal_id: 1,
        step_name: 'Find editor',
        completed_at: '2016-02-19 10:23:54-08',
        user_id: 1
      },{
        id: 6,
        goal_id: 1,
        step_name: 'Do a structural edit',
        completed_at: '2016-03-01 10:23:54-08',
        user_id: 1
      },{
        id: 7,
        goal_id: 1,
        step_name: 'Workshop draft',
        completed_at: '2016-03-10 10:23:54-08',
        user_id: 1
      },{
        id: 8,
        goal_id: 1,
        step_name: 'Line edit',
        completed_at: '2016-04-19 10:23:54-08',
        user_id: 1
      },{
        id: 9,
        goal_id: 1,
        step_name: 'Proofread',
      },{
        id: 10,
        goal_id: '1',
        step_name: 'Publish',
      },{
        id: 11,
        goal_id: 2,
        step_name: 'Create guest list',
        completed_at: '2016-05-10 10:23:54-08',
        user_id: 1
      },{
        id: 12,
        goal_id: 2,
        step_name: 'Reserve party room',
        completed_at: '2016-05-11 10:23:54-08',
        user_id: 2
      },{
        id: 13,
        goal_id: 2,
        step_name: 'Make shopping list',
        completed_at: '2016-06-12 10:23:54-08',
        user_id: 1
      },{
        id: 14,
        goal_id: 2,
        step_name: 'Create playlist',
        completed_at: '2016-07-13 10:23:54-08',
        user_id: 2
      },{
        id: 15,
        goal_id: 2,
        step_name: 'Make pigs in blankets',
        completed_at: '2016-07-14 10:23:54-08',
        user_id: 1
      },{
        id: 16,
        goal_id: 2,
        step_name: 'Buy red plastic cups',
        completed_at: '2016-08-01 10:23:54-08',
        user_id: 2
      },{
        id: 17,
        goal_id: 2,
        step_name: 'Send invites',
        completed_at: '2016-08-02 10:23:54-08',
        user_id: 1
      },{
        id: 18,
        goal_id: 2,
        step_name: 'Blow balloons',
        completed_at: '2016-09-03 10:23:54-08',
        user_id: 2
      },{
        id: 19,
        goal_id: 2,
        step_name: 'Buy cake',
        completed_at: '2016-09-04 10:23:54-08',
        user_id: 1
      },{
        id: 20,
        goal_id: 2,
        step_name: 'Decorate',
        completed_at: '2016-09-05 10:23:54-08',
        user_id: 2
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps));"
      );
    });
};
