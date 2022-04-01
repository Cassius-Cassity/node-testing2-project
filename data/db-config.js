const knex = require('knex');
const configurations = require('../knexfile');
// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV || 'developement';

module.exports = knex(configurations[environment]);