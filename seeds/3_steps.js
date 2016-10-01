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
        completed_at: '2016-02-05 10:23:54-08',
        user_id: 1
      },{
        id: 3,
        goal_id: 1,
        step_name: 'Outline story',
        completed_at: '2016-03-06 10:23:54-08',
        user_id: 1
      },{
        id: 4,
        goal_id: 1,
        step_name: 'Revise draft',
        completed_at: '2016-04-19 10:23:54-08',
        user_id: 1
      },{
        id: 5,
        goal_id: 1,
        step_name: 'Find editor',
        completed_at: '2016-05-19 10:23:54-08',
        user_id: 1
      },{
        id: 6,
        goal_id: 1,
        step_name: 'Do a structural edit',
        completed_at: '2016-06-01 10:23:54-08',
        user_id: 1
      },{
        id: 7,
        goal_id: 1,
        step_name: 'Workshop draft',
        completed_at: '2016-07-10 10:23:54-08',
        user_id: 1
      },{
        id: 8,
        goal_id: 1,
        step_name: 'Line edit',
        completed_at: '2016-08-19 10:23:54-08',
        user_id: 1
      },{
        id: 9,
        goal_id: 1,
        step_name: 'Proofread',
      },{
        id: 10,
        goal_id: 1,
        step_name: 'Publish',
      },{
        id: 11,
        goal_id: 2,
        step_name: 'Make a plan for lunch',
        completed_at: '2016-01-10 10:23:54-08',
        user_id: 1
      },{
        id: 12,
        goal_id: 2,
        step_name: 'Buy more tupperware',
        completed_at: '2016-05-11 10:23:54-08',
        user_id: 1
      },{
        id: 13,
        goal_id: 2,
        step_name: 'Make shopping list'
      },{
        id: 14,
        goal_id: 3,
        step_name: 'Build up base mileage',
        completed_at: '2016-01-13 10:23:54-08',
        user_id: 1
      },{
        id: 15,
        goal_id: 3,
        step_name: 'Do a long run',
        completed_at: '2016-02-14 10:23:54-08',
        user_id: 1
      },{
        id: 16,
        goal_id: 3,
        step_name: 'Practice intervals'
      },{
        id: 17,
        goal_id: 3,
        step_name: 'Practice tempo run'
      },{
        id: 18,
        goal_id: 3,
        step_name: 'Run a marathon'
      },{
        id: 19,
        goal_id: 4,
        step_name: 'Consolidate loans',
        completed_at: '2016-08-04 10:23:54-08',
        user_id: 1
      },{
        id: 20,
        goal_id: 4,
        step_name: 'Set automatic payment',
        completed_at: '2016-09-12 10:23:54-08',
        user_id: 1
      },{
        id: 21,
        goal_id: 4,
        step_name: 'Change repayment plan'
      },{
        id: 22,
        goal_id: 5,
        step_name: 'Buy a trampoline',
        completed_at: '2016-03-12 10:23:54-08',
        user_id: 2
      },{
        id: 23,
        goal_id: 5,
        step_name: 'Do a flip',
        completed_at: '2016-03-12 10:23:54-08',
        user_id: 2
      },{
        id: 24,
        goal_id: 5,
        step_name: 'Jump higher than 10 feet',
        completed_at: '2016-05-12 10:23:54-08',
        user_id: 2
      },{
        id: 25,
        goal_id: 5,
        step_name: 'Jump with basketball in hand',
        completed_at: '2016-07-04 10:23:54-08',
        user_id: 2
      },{
        id: 26,
        goal_id: 5,
        step_name: 'Put basketball in basket while jumping'
      },{
        id: 27,
        goal_id: 6,
        step_name: 'Pick countries to visit',
        completed_at: '2016-09-01 10:23:54-08',
        user_id: 2
      },{
        id: 28,
        goal_id: 6,
        step_name: 'Pick cities to visit',
        completed_at: '2016-09-04 10:23:54-08',
        user_id: 2
      },{
        id: 29,
        goal_id: 6,
        step_name: 'Book hostels'
      },{
        id: 30,
        goal_id: 6,
        step_name: 'Book flight'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('steps_id_seq', (SELECT MAX(id) FROM steps));"
      );
    });
};
