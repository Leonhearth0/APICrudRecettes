const recipeRouter = require("express").Router()
const recipeControllers = require('../controllers/recipeControllers')

// recipeRouter.post('/autors/idAutors/addrecipe', recipeControllers.postRecipes)
// recipeRouter.get('/displayrecipes', recipeControllers.getAllRecipes);
// recipeRouter.get('/displayrecipes/:id', recipeControllers.getOneRecipes);
// recipeRouter.delete('/displayrecipes/:id', recipeControllers.deleteRecipes);
// recipeRouter.put('/displayrecipes/:id', recipeControllers.updateRecipes);

recipeRouter.post('/autors/:idAutors/recipes', recipeControllers.postRecipes)
recipeRouter.get('/recipes', recipeControllers.getAllRecipes);
recipeRouter.get('/recipes/:id', recipeControllers.getOneRecipes);
recipeRouter.delete('/autors/:idAutors/recipes/:id', recipeControllers.deleteRecipes);
recipeRouter.put('/recipes/:id', recipeControllers.updateRecipes);

module.exports = recipeRouter