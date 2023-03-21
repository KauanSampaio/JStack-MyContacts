const { Client } = require('pg');

// Credenciais de acesso ao banco de dados
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts'
});

client.connect();

exports.query = async (query) => {
    const { rows } = await client.query(query);
    return rows;
};
