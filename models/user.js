/**
 * Created by sonja on 10/15/17.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userModelSchema = new Schema({
    username: String,
    email: String
});

userModelSchema
    .virtual('url')
    .get(function () {
        return '/insertUser';
    });

module.exports = mongoose.model('userModel', userModelSchema);