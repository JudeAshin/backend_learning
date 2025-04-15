const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/palindrome/:word', controller.isPalindrome);
router.get('/reverse/:word', controller.reverse);
router.post('/sumOfArray', controller.sumOfArray);
router.post('/maxNumber', controller.maxNoArray)

module.exports = router;