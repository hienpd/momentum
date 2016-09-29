'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('goals', (table) => {
    table.increments();
    table.string('goal_name').notNullable().defaultTo('');
    table.date('deadline').nullable();
    table.integer('target').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('goals');
};
