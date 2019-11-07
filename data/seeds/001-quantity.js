
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {id: 1, QuantityOfIngredient: 5.0, food_id: 1, ingredient_id: 1},
        {id: 2, QuantityOfIngredient: 14.56, food_id: 1, ingredient_id: 2},
        {id: 3, QuantityOfIngredient: 3.5, food_id: 1, ingredient_id: 3}
      ]);
    });
};
