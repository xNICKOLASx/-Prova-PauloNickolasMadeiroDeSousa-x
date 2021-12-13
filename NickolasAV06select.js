const knex = require('knex') ({
    client: 'sqlite3',
    connection: {
      filename: './banco/dev.sqlite3'
    },
    useNullAsDefault: true
})

knex.select().table('TB_CLIENTE').then(data => {
    console.log(data)
}).catch(error => console.log(error))

knex.select().table('TB_PRODUTO').then(data => {
    console.log(data)
}).catch(error => console.log(error))

knex.select().table('TB_PEDIDO').then(data => {
    console.log(data)
}).catch(error => console.log(error))

knex.select().table('TB_PEDIDO_PRODUTO').then(data => {
    console.log(data)
}).catch(error => console.log(error))
