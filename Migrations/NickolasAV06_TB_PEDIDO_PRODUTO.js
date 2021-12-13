exports.up = function(knex) {
    return knex.schema.createTable('TB_PEDIDO_PRODUTO', table => {
        table.increments('id').primary()
        table.integer('pedido_id').unsigned()
        table.integer('produto_id').unsigned()
        table.integer('quantidade').notNull()
        table.foreign('pedido_id').references('TB_PEDIDO.id')
        table.foreign('produto_id').references('TB_PRODUTO.id')
        table.real('valor_item').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_PEDIDO_PRODUTO')
};
