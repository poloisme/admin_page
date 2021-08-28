const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

//homeController index
router.get('/', homeController.index);

module.exports = router;