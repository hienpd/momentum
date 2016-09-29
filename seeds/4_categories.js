/* eslint-disable camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('categories').del()
    .then(() => {
      return knex('categories').insert([{
        id: 1,
        category: 'fitness'
      },{
        id: 2,
        category: 'career'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));"
      );
    });
};
