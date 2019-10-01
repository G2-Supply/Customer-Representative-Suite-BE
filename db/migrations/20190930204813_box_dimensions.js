exports.up = function(knex) {
    return knex.schema.createTable('box_dimensions', tbl => {
        tbl.increments()
        tbl.float('box_length')
        tbl.float('box_width')
        tbl.float('box_height')
        tbl.float('x1')
        tbl.float('x2')
        tbl.float('x3')
        tbl.float('x4')
        tbl.float('x5')
        tbl.float('x6')
        tbl.float('x7')
        tbl.float('x8')
        tbl.float('x9')
        tbl.float('x10')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('box_dimensions'); 
};
