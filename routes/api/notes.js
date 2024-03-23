const express = require('express');
const router = express.Router();
const noteController = require ('../../controllers/api/note');

router.get('/', noteController.index);
router.post('/', noteController.create);

module.exports = router; 