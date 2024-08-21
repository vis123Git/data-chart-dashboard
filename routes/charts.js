const express = require('express');
const { createChart, getCharts } = require('../controllers/chart.controller');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', createChart);
router.get('/', getCharts);

module.exports = router;
