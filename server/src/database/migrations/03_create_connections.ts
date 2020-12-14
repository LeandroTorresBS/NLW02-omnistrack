import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table =>{
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') // Refletir uma alteração em todas as tabelas que dependem desta informação
        .onDelete('CASCADE'); // Deletar todas as aulas do professor

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}