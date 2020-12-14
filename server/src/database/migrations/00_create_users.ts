import Knex from 'knex';

// UP: Quais alterações realizar no banco de dados
// DOWN: Rollback


export async function up(knex: Knex){
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}