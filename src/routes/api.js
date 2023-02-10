const express = require('express');
const ProductController = require('../controllers/ProductsController');
const router = express.Router();


// create route
router.post('/createProduct', ProductController.CreateProduct);

// read product
router.get('/readProduct', ProductController.ReadProduct);
// read product by id
router.get('/readProductByID/:id', ProductController.ReadProductByID);

// update product
router.post('/updateProduct/:id', ProductController.UpdateProduct);

// delete product
router.get('/deleteProduct/:id', ProductController.DeleteProduct);















module.exports = router;