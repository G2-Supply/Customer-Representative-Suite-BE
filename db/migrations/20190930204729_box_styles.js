exports.up = function(knex) {
    return knex.schema.createTable('box_styles', tbl => {
        tbl.increments()
        tbl.string('box_style_name')
            .notNullable()
            .unique()
        tbl.string('box_style_formula')
            .notNullable()
    })
}   

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('box_styles'); 
};
