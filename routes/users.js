const express = require('express');
const { createUser, getUsers } = require('../controllers/user.controller');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', createUser);
router.get('/', getUsers);

module.exports = router;
