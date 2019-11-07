
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'rice'},
        {id: 2, ingredient: 'water'},
        {id: 3, ingredient: 'salt'}
      ]);
    });
};
