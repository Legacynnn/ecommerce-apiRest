const {Router} = require('express')
const userController = require('../controllers/userController')
const loginController = require('../controllers/loginController')
const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')
const { authentication } = require('../middlewares/index')

const routes = Router()

routes.get('/', (req, res) => {
    res.json({ Menssage: "Hello" })
})
routes.post('/createUser', userController.createUser)
routes.get('/users', userController.getUsers)
routes.get('/users/:user_id',authentication, userController.getUsersById)

routes.post('/login', loginController.createSession,)

routes.post('/createProducts/:user_id',authentication, productController.createProduct)
routes.get('/products',authentication, productController.getProducts)
routes.get('/getProductsUser/:user_id',authentication, productController.getProductByUserId)
routes.patch('/products/:product_id',authentication, productController.updateProduct)
routes.get('/getProductsId/:product_id',authentication, productController.getProductByProductId)

routes.post('/cartUser/:users_id',authentication, cartController.createCart)
routes.get('/cartId/:user_id',authentication, cartController.getCartByUserID)



module.exports = routes