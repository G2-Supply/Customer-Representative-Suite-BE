
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('box_styles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('box_styles').insert([
        { 
          box_style_name: 'RSC', 
          box_style_formula: '((length * 2 + width * 2 + x1) * (height * 2)) / 144'
        },
        { 
          box_style_name: 'HSC', 
          box_style_formula: '((length * 2 + width * 2 + x1) * (height * 2)) / 144 '
        },
        { 
          box_style_name: 'FOL', 
          box_style_formula: '((length * 2 + width * 2 + x1) * (height * 2)) / 144'
        }
      ]);
    });
};
