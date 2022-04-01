
exports.up = async function(knex) {
await knex.schema
    .createTable('pokemon', table => {
        table.increments('poke_id')
        table.string('name', 107).notNullable().unique()
        table.string('type', 107).notNullable()
    })

};

exports.down = async function(knex) {
await knex.schema
    .dropTableIfExists('pokemon')
};
