exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auth').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('auth').insert([
        { username: 'elijah', password: 'elijah' },
        { username: 'gracie', password: 'gracie' },
        { username: 'tim', password: 'tim' },
      ]);
    });
};