'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('goals_users', (table) => {
    table.increments();
    table.integer('goal_id')
      .notNullable()
      .references('id')
      .inTable('goals')
      .onDelete('CASCADE')
      .index();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
