const pgp = require('pg-promise')()
const db = pgp({
    user: 'admin',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'shelf'
})

module.exports = db