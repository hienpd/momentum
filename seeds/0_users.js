/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Kerry',
        last_name: 'Washington',
        username: 'kaydub',
        hashed_password: '$2a$12$74CldQSAFWfyM060UC/G9.8DXzrybtgv8ARI/2IzQgk.jfOA6yy1K',
        avatar_url: 'http://www.mb.com.ph/wp-content/uploads/2016/01/gh-150x150.jpg'
      },{
        id: 2,
        first_name: 'Dan',
        last_name: 'Rather',
        username:'dantheman',
        hashed_password: '$2a$12$74CldQSAFWfyM060UC/G9.8DXzrybtgv8ARI/2IzQgk.jfOA6yy1K',
        avatar_url: 'http://www.freepress.net/sites/default/files/fp-legacy/images/danrather.jpg'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
