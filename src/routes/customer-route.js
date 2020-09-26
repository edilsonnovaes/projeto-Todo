const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer-controller');

//Middleware
router.use(function(req, res, next){
  console.log('Interceptação pelo middleware'); // LOG, autenticação, validação ...
  next();
});

router.post('/', customerController.post);
router.get('/', customerController.getAll);
router.get('/:customerId', customerController.getById);

module.exports = router;