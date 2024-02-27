const recipeModel = require('../models/recipeModel')
const autorModel = require('../models/autorModel')

exports.postRecipes = async (req, res) => {
    try {
        const autors = autorModel.findOne({ _id: req.params.idAutors })
        if (autors) {
            const newRecipes = new recipeModel(req.body)
            newRecipes.validateSync();
            await newRecipes.save();
            await autors.updateOne({ _id: req.params.idAutors }, { $push: { recipes: newRecipes._id } })
            res.json("Recette bien créée")
        } else {
            res.json("Aucun auteur trouvé")
        }
    } catch (error) {
        console.log(res.json(error));
        res.json(error)
    }
}

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await recipeModel.find();
        res.json(recipes);
    } catch (error) {
        res.json(error);
    }
}

exports.getOneRecipes = async (req, res) => {
    try {
        const recipes = await recipeModel.findOne({ _id: req.params.id })
        res.json(recipes)
    } catch (error) {
        res.json(error);
    }
}

exports.deleteRecipes = async (req, res) => {
    try {
        const autors = autorModel.findOne({ _id: req.params.idAutors })
        if (autors) {
            const delRecipes = recipeModel.deleteOne({_id: req.params.id})
            await autorModel.updateOne({ _id: req.params.idAutors }, { $pull: { recipes: req.params.id } })
            res.json("Recette bien supprimée")
        } else {
            res.json("Aucun auteur trouvé")
        }
    } catch (error) {
        res.json(error.message)
    }
}

exports.updateRecipes = async (req, res) => {
    try {
        const recipes = await recipeModel.updateOne({ _id: req.params.id }, req.body)
        res.json(recipes)
    } catch (error) {
        res.json(error)
    }
}