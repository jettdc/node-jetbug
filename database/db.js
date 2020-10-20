const { Client } = require('pg');
// pgp.pg.defaults.ssl = true;

const client = new Client({
  // connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false }
  user: 'klfjfydugqgqyn',
  host: 'ec2-18-210-180-94.compute-1.amazonaws.com',
  database: 'd5ue6ks93mmsdr',
  password: 'ab2094bf053970ffc38baaca50e7cffffa6d61b4033d1ff00ad8d808c3c464c8',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = client;