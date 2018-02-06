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
// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(results => console.log(results));

// Number 4
// knex('restaurants')
//   .count('cuisine')
//   .where('cuisine', 'Thai')
//   .then(results => console.log(results));
 

// Number 5
// knex('restaurants')
//   .count('restaurants')
//   .then(consoleLog);

// Number 6
// knex('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .where('address_zipcode', '11372')
//   .then(consoleLog);

// Number 7
knex
  .select('id', 'name')
  .from('restaurants')
  .whereIn('address_zipcode', [10012, 10013, 10014])
  .orderBy('name', 'asc')
  .limit(5)
  .then(consoleLog);
  

// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});

// HELPER 
function consoleLog (res) {
  console.log(res);
}