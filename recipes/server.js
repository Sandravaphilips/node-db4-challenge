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

server.get('/api/recipes/:id/shoppinglist', (req, res) => {
    const {id} = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.get('/api/recipes/:id/steps', (req, res) => {
    const {id} = req.params;
    Recipes.getInstructions(id)
    .then(steps => res.status(200).json(steps))
})

module.exports = server;
