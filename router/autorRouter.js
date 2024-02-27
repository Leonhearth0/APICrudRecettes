const autorRouter = require("express").Router()
const autorControllers = require('../controllers/autorControllers')

autorRouter.get('/autors', autorControllers.getAutors)
autorRouter.get('/autors/:id', autorControllers.getOneAutors)
autorRouter.post('/autors', autorControllers.postAutors)
autorRouter.delete('/autors/:id', autorControllers.deleteAutors)
autorRouter.put('/autors/:id', autorControllers.updateAutors)

module.exports = autorRouter