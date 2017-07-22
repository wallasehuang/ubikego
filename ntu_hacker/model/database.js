const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';
const client = new pg.Client(connectionString);
client.connect();
const query = client.query('CREATE TABLE info(id SERIAL PRIMARY KEY, status integer, discount integer)');
query.on('end', () => {
    client.end();
});