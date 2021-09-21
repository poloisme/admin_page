const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

//product Controller index
router.get('/', productController.index);
router.delete('/:id', productController.delete);
router.get('/create', productController.create);
router.post('/store', productController.store)
router.all('/trash', productController.trash);
router.delete('/trash/:id/force', productController.deleteForce);
router.patch('/trash/:id/restore', productController.restore);
router.get('/:id/edit', productController.edit);
router.put('/:id', productController.update);

module.exports = router;
