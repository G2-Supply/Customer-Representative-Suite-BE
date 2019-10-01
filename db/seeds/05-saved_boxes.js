exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_boxes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('saved_boxes').insert([
        { box_name: 'Box', box_dimensions_id: 1, box_board_grade: 1, box_style: 1, user_id: 1}
      ]);
    });
};
