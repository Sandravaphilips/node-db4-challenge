
exports.up = function(knex) {
  return knex.schema
    .createTable('foods', table => {
        table.increments();
        table.string("food", 128)
    })
    .createTable('ingredients', table => {
        table.increments();
        table.string("ingredient", 128);
    })
    .createTable('recipes', table => {
        table.increments();
        table.string("steps")
        table.integer('food_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('foods')
    })
    .createTable("quantity", table => {
        table.increments();
        table.decimal("QuantityOfIngredient");
        table.integer('food_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('foods');
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
        table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('quantity')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('foods')
};
