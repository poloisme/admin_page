const express = require('express');
const router = express.Router();

const chatController = require('../app/controllers/ChatController');

//homeController index
router.get('/', chatController.index);

module.exports = router;