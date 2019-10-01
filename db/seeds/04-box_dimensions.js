exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('box_dimensions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('box_dimensions').insert([
        { box_length: 2.5, box_width: 2.5, box_height: 2.5, x1: 1, x2: 2, x3: 3 }
      ]);
    });
};