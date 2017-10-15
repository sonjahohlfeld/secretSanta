var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SecretSanta', mainTitle: 'SecretSanta'});
});

// router.get('/insertUser', function(req, res){
//   res.render('insertUser', { title: 'hello world'});
// });

module.exports = router;
