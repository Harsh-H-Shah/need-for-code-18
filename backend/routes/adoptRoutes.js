const express = require('express');
const router = express.Router();
const {
  getPets,
  postPet,
  applyForAdoption,
} = require('../controllers/adoptController');

router.route('/').get(getPets).post(postPet);
router.route('/apply').post(applyForAdoption);

module.exports = router;
