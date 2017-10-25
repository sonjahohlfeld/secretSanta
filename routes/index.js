var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/index');

router.get('/', index_controller.index);

router.post('/insertUser', index_controller.insert_user_post);

module.exports = router;
