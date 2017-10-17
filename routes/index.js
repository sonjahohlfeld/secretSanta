var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var index_controller = require('../controllers/indexController');

router.get('/', index_controller.index);

router.get('/insertUser', user_controller.user_insert_get);

router.post('/insertUser', user_controller.user_insert_post);

module.exports = router;
