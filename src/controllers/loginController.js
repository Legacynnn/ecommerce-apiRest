const userModel = require('../models/Users')

const loginController = {
    async createSession(req, res){
        const {username} = req.body

        try{
            const user = await userModel.findOne({ username })
            return res.status(400).json(user)
        }
        catch(err){
            return res.status(400).send(err)
        }
    }
}

module.exports = loginController