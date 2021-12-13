exports.up = function(knex) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('id').primary()
        table.string('descricao').notNull()
        table.real('preco').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_PRODUTO')
};
