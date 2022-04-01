const router = require('express').Router()
const Pokemon = require('./pokemon-model')

router.get('/', (req, res, next) => {
    Pokemon.getAll()
        .then(pokemonList => {
            res.status(200).json(pokemonList)
        })
        .catch(next)
})

// router.get('/:poke_id', (req, res, next) => {
//     Pokemon.getPokemonById(req.params.poke_id)
//         .then(pokemon => {
//             res.status(200).json(pokemon)
//         })
//         .catch(next)
// })

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in the poke router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router