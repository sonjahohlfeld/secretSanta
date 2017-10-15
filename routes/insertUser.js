/**
 * Created by sonja on 10/14/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('insertUser', { title: 'insert a user', mainTitle: 'SecretSanta'});
});

// Handle Author create on POST
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

module.exports = router;