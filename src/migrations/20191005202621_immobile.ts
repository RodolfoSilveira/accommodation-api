exports.up = function (knex, Promise) {
  return knex.schema.createTable('immobiles', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.float('price').notNullable();
    table.string('place').notNullable();
    table.string('description').notNullable();
    table.string('owner').notNullable();
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('immobiles');
};
