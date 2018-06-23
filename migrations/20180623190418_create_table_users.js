exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function (table) {
            table.increments();
            table.bigInteger('user_id');
            table.tinyint('level').unsigned();
            table.integer('experience').unsigned();
            table.integer('coins').unsigned();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ]);
};
