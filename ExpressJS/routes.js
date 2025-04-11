const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/palindrome/:word', controller.isPalindrome);

module.exports = router;