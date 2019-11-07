const db = require('../data/db-config')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipeById, 
  getIngredients
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

function getIngredients() {
    return db('ingredients')
}

function getRecipeById(id) {
    return db('foods as f').join('quantity as q', 'f.id', 'q.food_id').join('ingredients as i', 'i.id', 'q.ingredient_id').select('f.id', 'f.food').where({'i.id': id})
}

