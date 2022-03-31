function getPokemonById(poke_id){
    return Promise.resolve(`hello from inside the poke with id ${poke_id}`)
}

module.exports = {
    getPokemonById
}