const express = require('express');
const router = express.Router();
const { postReport } = require('../controllers/reportController');

router.route('/').post(postReport);

module.exports = router;
