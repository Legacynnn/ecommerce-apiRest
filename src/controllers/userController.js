const userModel = require('../models/Users')

const userController = {
    async createUser(req, res) {
        const bodyData = req.body

        try{
            const newUser = await userModel.create(bodyData)
            return res.status(201).json(newUser)
        }
        catch(err){
            return res.status(400).send(err)
        }
    },

    async getUsers(req, res) {

        try{
            const users = await userModel.find()
            return res.status(201).json(users)
        } 
        catch(err) {
            return res.status(400).json(err)
        }
    },

    async getUsersById(req, res) {
        const { user_id } = req.params

        try{
            const userSearchedById = await userModel.findById(user_id)
            return res.status(201).json(userSearchedById)
        }
        catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = userController