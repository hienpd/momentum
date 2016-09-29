'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('categories_goals', (table) => {
    table.increments();
    table.integer('category_id')
      .notNullable()
      .references('id')
      .inTable('categories')
      .onDelete('CASCADE')
      .index();
    table.integer('goal_id')
      .nullable()
      .references('id')
      .inTable('goals')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories_goals');
};
