
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, steps: 'boil the water inside the cooking pot', food_id: 1},
        {id: 2, steps: 'thoroughly wash the rice with warm or lukewarm water. You can repeat twice', food_id: 1},
        {id: 3, steps: 'Once the water is boiled, add the washed rice', food_id:1}
      ]);
    });
};
