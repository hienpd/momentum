'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('steps', (table) => {
    table.increments();
    table.string('step_name').notNullable().defaultTo('');
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
    table.timestamp('completed_at').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
