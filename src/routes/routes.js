const {Router} = require('express')
const userController = require('../controllers/userController')
const loginController = require('../controllers/loginController')
const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')

const routes = Router()

routes.get('/', (req, res) => {
    res.json({ Menssage: "Hello" })
})
routes.post('/createUser', userController.createUser)
routes.get('/users', userController.getUsers)
routes.get('/users/:user_id', userController.getUsersById)

routes.post('/login', loginController.createSession)

routes.post('/createProducts/:user_id', productController.createProduct)
routes.get('/products', productController.getProducts)
routes.get('/getProductsUser/:user_id', productController.getProductByUserId)
routes.patch('/products/:product_id', productController.updateProduct)
routes.get('/getProductsId/:product_id', productController.getProductByProductId)

routes.post('/cartUser/:users_id', cartController.createCart)
routes.get('/cartId/:cart_id')



module.exports = routes