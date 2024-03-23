const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/check-token', usersCtrl.checkToken);
// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.logIn);
router.get('/find', usersCtrl.find);


module.exports = router;