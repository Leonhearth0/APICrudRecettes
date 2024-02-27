const autorModel = require('../models/autorModel')

exports.getAutors = async (req, res) => {
    try {
        const autors = await autorModel.find()
        .populate("recipes")
        res.json(autors)
    }
    catch (error) {
        res.json(error.message)
    }
}

exports.getOneAutors = async (req, res)=>{
    try {
        const autors = await autorModel.findOne({_id: req.params.id}) 
        .populate("recipes")  
        res.json(autors)
    } catch (error) {
        res.json(error);
    }
}

exports.postAutors = async (req, res) => {
    try {
        const autors = new autorModel(req.body)
        autors.validateSync()
        await autors.save()
        res.json("L'auteur a bien été enregistré")
    } catch (error) {
        res.json(error.message)
    }
}

exports.deleteAutors = async(req,res) => {
    try {
        const autors = await autorModel.deleteOne({_id: req.params.id})
        res.json(autors)
    }catch (error){
        res.json(error)
    }
}

exports.updateAutors = async(req,res) => {
    try {
        const autors = await autorModel.updateOne({_id: req.params.id}, req.body)
        res.json(autors)
    }catch (error){
        res.json(error)
    }
}