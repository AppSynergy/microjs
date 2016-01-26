exports.up = function(knex, Promise) {

  return knex.schema

    .createTable('heroes', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('first_published').unsigned();
    })

    .createTable('persons', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('hero_id').unsigned()
        .notNullable().references('heroes.id');
    });
};


exports.down = function(knex, Promise) {

  return knex.schema
    .dropTable('heroes')
    .dropTable('persons');
};
