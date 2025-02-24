const { getProducts, addProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productController')
const authProduct = require('../MiddleWares/authProduct')


const productRouter = require('express').Router()


productRouter.get('/', getProducts)
productRouter.post('/create', authProduct, addProduct)
productRouter.get('/:id', getProductById)
productRouter.put('/:id', authProduct, updateProduct)
productRouter.delete('/:id', deleteProduct)


module.exports = productRouter