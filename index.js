const client = require('./database/db.js');
const queries = require('./database/queries.js');

client.connect();

client.query('SELECT * FROM test;', (err, res) => {
    if (err) throw err;
    console.log(res.rows);
    client.end(err => {
        console.log('client has disconnected')
        if (err) {
            console.log('error during disconnection', err.stack)
        }
    });
});

