const db = require('../../data/db-config')

function getAll() {
    return db('pokemon')
}

// function getById(poke_id) {
//     return db('pokemon').where('poke_id', poke_id).first()
// }

// async function insert(pokemon){
//     const [id] = await db('pokemon').insert(pokemon)
//     return getById(id)
// }

// async function update(poke_id, changes) {
//     await db('pokemon').update(changes).where('poke_id', poke_id);
//     return getById(poke_id)
// }

// async function remove(poke_id){
//     const result = await getById(poke_id);
//     await db('pokemon').where('poke_id', poke_id).del()
//     return result
// }

module.exports = {
   getAll,
//    getById,
//    update,
//    remove, 
//    insert
}