/**
 * Created by sonja on 10/14/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('insertUser', { title: 'insert a user'});
});

module.exports = router;