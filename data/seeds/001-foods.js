
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, food: 'white rice'},
        {id:2, food: "noodles"}
      ]);
    });
};
