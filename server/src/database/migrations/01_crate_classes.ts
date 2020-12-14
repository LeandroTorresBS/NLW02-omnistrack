import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') // Refletir uma alteração em todas as tabelas que dependem desta informação
        .onDelete('CASCADE'); // Deletar todas as aulas do professor
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}