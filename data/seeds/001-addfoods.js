
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('foodse').insert([
        {id: 1, food: 'rice'}
        
      ]);
    });
};
