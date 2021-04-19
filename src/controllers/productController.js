const productModel = require('../models/Products')

const productController = {
    async createProduct(req, res) {
        const bodyData = req.body
        const { user_id } = req.params

        try {
            
            const data = { username: user_id, ...bodyData }
            
            
            const newProduct = await productModel.create(data)
            await newProduct.populate('username').execPopulate()
            return res.status(201).json(newProduct)
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    async getProducts(req, res) {
        try{
            const allProducts = await productModel.find()
            return res.status(201).json(allProducts)
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    async getProductByUserId(req, res) {
        const { user_id } = req.params
        
        try{
            const productOfUser = await productModel.find({ username: user_id })
            return res.status(200).json(productOfUser)
        }catch(err){
            return res.status(400).json(err)
        }
    },

    async updateProduct(req, res){
        const bodyData = req.body
        const { product_id } = req.params

        try{
            const updatedProduct = await productModel.findByIdAndUpdate(product_id, bodyData, { new: true, useFindAndModify: true })
            return res.status(200).json(updatedProduct)
        } catch(err){
            return res.status(400).json(err)
        }
    },

    async getProductByProductId(req, res) {
        const { product_id } = req.params

        try{
            const productGettedById = await productModel.findById(product_id)
            return res.status(200).json(productGettedById)
        }catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = productController