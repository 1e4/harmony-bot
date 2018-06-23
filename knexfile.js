// Update with your config settings.
require('dotenv').config();
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_DATABASE,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
    },

    production: {
        client: 'mysql',
        connection: {
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_DATABASE,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
