const express = require('express');
const { createDataSource, getDataSources } = require('../controllers/datasource.controller');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', createDataSource);
router.get('/', getDataSources);
module.exports = router;
