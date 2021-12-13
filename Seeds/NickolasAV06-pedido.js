exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PEDIDO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PEDIDO').insert([
        {id: 1, data_pedido: '2021-10-02', cliente_id: 1},
        {id: 2, data_pedido: '2021-05-20', cliente_id: 2}
      ]);
    });
};
