const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Entrez le nom de la recette"]
    },
    ingredients: {
        type: Array,
        required: [true, "Entrez les ingrédients"]
    },
    preparation: {
        type: String,
        required: [true, "Entrez les instructions de préparation"]
    },
    prepTime: {
        type: String,
        required: [true, "Entre le temps de préparation"]
    },
    cookingTime: {
        type: String,
        required: [true, "Entrez le temps de cuisson"]
    },
    prepDifficulty: {
        type: String,
        required: [true, "Entrez le niveau de difficulté"]
    },
    category: {
        type: String,
        required: [true, "Entrez la catégorie de plat"]
    },
    image: {
        type: String,
    }
})

const recipeModel = mongoose.model('recipes', recipeSchema)
module.exports = recipeModel