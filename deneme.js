const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'postgres'
});

let finally1 = client.connect()
    .then(() => console.log('Connected successfully.'))
    .then(() => client.query('SELECT * FROM users')) // Sorgunuz neyse burayı güncelleyin
    .then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(() => client.end());
