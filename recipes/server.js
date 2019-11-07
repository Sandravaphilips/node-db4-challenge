const express = require('express');
const helmet = require('helmet');

const Recipes = require('./model');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/recipes/:id/shoppinglist', validateId, (req, res) => {
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.get('/api/recipes/:id/steps', validateId, (req, res) => {
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then(steps => res.status(200).json(steps))
    .catch(err => res.status(500).json(err))
})

server.get('/api/ingredients', (req, res) => {
  Recipes.getIngredients()
  .then(ingredients => res.status(200).json(ingredients))
  .catch(err => res.status(500).json(err))
})

server.get('/api/ingredients/:id/recipes', validateId, (req, res) => {
  const {id} = req.params;
  Recipes.getRecipeById(id)
  .then(recipes => res.status(200).json(recipes))
  .catch(err => res.status(500).json(err))
})

const validateId = (req, res, next) => {
  const {id} = req.params;
  if (!id) {
    res.json({message: "please provide a valid id"})
  } else {
    next()
  }
}
module.exports = server;
