const mongoose = require('mongoose')

const autorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Le nom de l'auteur est requis"]
    },
    fname: {
        type: String,
        required: [true, "Le prénom de l'auteur est requis"]
    },
    recipes: {
        type: [
            {type: mongoose.Schema.ObjectId,
            ref: "recipes"}
        ]
    }
})

const autorModel = mongoose.model('autors', autorSchema)
module.exports = autorModel