exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('box_board_grade').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('box_board_grade').insert([
        { board_grade: '200C' }
      ]);
    });
};