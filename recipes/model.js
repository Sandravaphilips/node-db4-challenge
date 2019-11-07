const db = require('../data/db-config')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('quantity as q')
    .join('ingredients as i', 'i.id', 'q.ingredient_id')
    .select('i.id', "i.ingredient", 'q.QuantityOfIngredient').where({"q.food_id": recipe_id})
}

function getInstructions(recipe_id) {
    return db('recipes').where({"food_id": recipe_id})
}