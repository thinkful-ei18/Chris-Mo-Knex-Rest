'use strict';

const { DATABASE } = require('./config');

const knex = require('knex')({
  client: 'pg',
  connection: {
      database: 'dev-restaurants-app'
  },
});

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));
//Number 1
// knex 
//   .select()
//   .from('restaurants')
//   .then(results => console.log(results));

//Number 2
// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine','Italian')
//   .then(results => console.log(results));

//Number 3
knex
  .select('id', 'name')
  .from('restaurants')
  .where('cuisine', 'Italian')
  .limit(10)
  .then(results => console.log(results));

// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});