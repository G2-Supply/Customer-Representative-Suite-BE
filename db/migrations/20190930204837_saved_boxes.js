exports.up = function(knex) {
    return knex.schema.createTable('saved_boxes', tbl => {
        tbl.increments()
        tbl.string('box_name')
            .notNullable()
            .unique()
        tbl.integer('box_dimensions_id')
            .notNullable()
            .references('id')
            .inTable('box_dimensions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('box_board_grade')
            .notNullable()
            .references('id')
            .inTable('box_board_grade')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('box_style')
            .notNullable()
            .references('id')
            .inTable('box_styles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('auth')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('saved_boxes'); 
};