const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController');

//homeController index
router.get('/', customerController.index);

module.exports = router;