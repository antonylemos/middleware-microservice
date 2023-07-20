const { Router } = require('express');

const MessageController = require('./app/controllers/MessageController');

const router = Router();

router.post('/messages', MessageController.store);

module.exports = router;
