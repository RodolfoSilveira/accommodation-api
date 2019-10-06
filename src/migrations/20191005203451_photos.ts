exports.up = function (knex, Promise) {
  return knex.schema.createTable('photos', (table) => {
    table.increments('id').primary();
    table.string('path').notNullable();
    table.integer('immobileId').unsigned();
    table.foreign('immobileId').references('id').inTable('immobiles');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('photos');
};
