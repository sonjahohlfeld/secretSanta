/**
 * Created by sonja on 10/15/17.
 */
var User = require('../models/user');

// Display list of all Users
exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: User list');
};

// Display user insert form on GET
exports.user_insert_get = function(req, res, next) {
    res.render('insertUser', {title: 'You sign in ', mainTitle: 'SecretSanta '});
};

// Handle Author create on POST
exports.user_insert_post = function(req, res, next) {
    req.checkBody('username', 'Your name is required').notEmpty();
    req.checkBody('email', 'Your email is required').notEmpty();

    var errors = req.validationErrors();

    var user = new User({username: req.body.username, email: req.body.email});

    if(errors){
        res.render('insertUser', {title: 'Insert user', user: user, errors: errors});
    } else {
        user.save(function(err){
            if (err) {return next(err);}
            res.redirect(user.url);
        });
    }
};
