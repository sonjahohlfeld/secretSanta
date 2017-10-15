var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SecretSanta', mainTitle: 'SecretSanta'});
});

router.get('/insertUser', user_controller.user_insert_get);

router.post('/insertUser', user_controller.user_insert_post);

module.exports = router;
