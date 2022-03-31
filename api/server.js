const express = require("express") //pulling in express from express

const pokemonRouter = require('./pokemon/pokemon-router') //pulling in pokemon router to attatch to server

const server = express() //instantiating express usage

server.use(express.json()) // formatting the data for the server.

server.use('api/pokemon', pokemonRouter) //using poke router and establishing an end point

module.exports = server