const express = require('express');
const router = express.Router();
const { signinCMS, signupCMS } = require('./controller');

router.post('/auth/signin', signinCMS);
router.post('/auth/signup', signupCMS);

module.exports = router;