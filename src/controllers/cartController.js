const cartModel = require('../models/Cart')

const cartController = {
    async createCart(req, res){
        const bodyData = req.body
        const { user_id } = req.params

        try{
            const createdCart = await cartModel.create({...bodyData, username: user_id})
            await createdCart.populate('products').execPopulate()
            return res.status(200).json(createdCart)
        }catch(err){
            return res.status(400).json(err)
        }

    },
    
    async getCartByUserID(req, res){
        const { user_id } = req.params
        try{
            const userCarts = await cartModel.find({ username: user_id }).populate('username').populate('products')
            return res.status(200).json(userCarts)
        }catch(err){
            return res.status(400).json(err)
        }

    },
}

module.exports = cartController