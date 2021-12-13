exports.up = function(knex) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_CLIENTE')
};
