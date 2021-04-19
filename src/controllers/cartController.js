const cartModel = require('../models/Cart')

const cartController = {
    async createCart(req, res){
        const bodyData = req.body
        const { user_id } = req.params

        try{
            const createdCart = await cartModel.create({...bodyData, username: user_id})
            return res.status(200).json(createdCart)
        }catch(err){
            return res.status(400).json(err)
        }

    },
    
    async getCartByUserID(req, res){

    },

    async getCartById(req,res){

    },
}

module.exports = cartController