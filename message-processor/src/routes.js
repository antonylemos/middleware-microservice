const { Router } = require('express');

const QueueController = require('./app/controllers/QueueController');

const router = Router();

router.post('/queue', QueueController.store);

module.exports = router;
