const pokemon = [
    { name: 'Pikachu', type: 'Electric'},
    { name: 'Bulbasaur', type: 'Leaf'},
    { name: 'Charamander', type: 'Fire'},
    { name: 'Squirtle', type: 'Water'},
    { name: 'Machop', type: 'Fighting'},
    { name: 'Gengar', type: 'Psychic'},
    { name: 'Mew', type: 'Psychic'},
    { name: 'Vulpix', type: 'Fire'},
    { name: 'Abra', type: 'Psychic'},
    { name: 'Hitmonchan', type: 'Fighting'},
    { name: 'Garydos', type: 'Water'},
]

exports.seed = async function (knex) {
    await knex('pokemon').insert(pokemon)
}