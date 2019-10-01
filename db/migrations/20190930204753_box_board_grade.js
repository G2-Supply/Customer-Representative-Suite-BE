exports.up = function(knex) {
    return knex.schema.createTable('box_board_grade', tbl => {
        tbl.increments()
        tbl.string('board_grade')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('box_board_grade')
};