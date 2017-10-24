exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function(table) {
    table.increments();
    table.string('name');
    table.string('address');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};