const express = require('express');
const router = express.Router();

const orderController = require('../app/controllers/OrderController');

//homeController index
router.get('/', orderController.index);

module.exports = router;