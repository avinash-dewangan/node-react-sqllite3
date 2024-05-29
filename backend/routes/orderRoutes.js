const express = require('express');
const orderController = require('../controllers/orderController');
const transController = require('../controllers/transController');

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.post('/transcation',transController.transaction);

module.exports = router;
