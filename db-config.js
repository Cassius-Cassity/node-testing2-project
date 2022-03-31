const knex = require("knex")

const config = require("../knexfile.js")

const environment = process.env.NODE_ENV || "developement"

module.exports = knex(config[environment])