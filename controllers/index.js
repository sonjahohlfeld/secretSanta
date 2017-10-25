/**
 * Created by sonja on 10/15/17.
 */

var User = require('../models/user');

exports.index = function(req, res) {
    User.find({}, 'username email').exec(function(err, user_list){
        if(err){return err;}
        res.render('index', { title: 'SecretSanta ', name: 'CCTB', userlist: user_list});
    })
};

exports.insert_user_post = function(req, res){
    var thisUser = new User({
        username: req.body.username,
        email: req.body.email
    });
    thisUser.save(function(err){
        if(err){return err;}
        res.render('insertUser', { title: 'SecretSanta ', name: req.body.username, message: 'Successfully registered'});
    });
};