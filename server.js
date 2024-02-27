const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require("./router/recipeRouter")
const autorRouter = require("./router/autorRouter")
const app = express();

app.use(express.json());
app.use(recipeRouter);
app.use(autorRouter);

app.listen (4000, (err) => {
    if (err){
        console.log(err);
    }else {
        console.log("Connecté au serveur port 4000")
    }
})

mongoose.connect('mongodb://localhost:27017/apirecipes');

