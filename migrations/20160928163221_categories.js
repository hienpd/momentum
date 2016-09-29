'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('categories', (table) => {
    table.increments();
    table.string('category').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories');
};
