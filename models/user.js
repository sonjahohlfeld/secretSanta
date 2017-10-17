/**
 * Created by sonja on 10/15/17.
 */
var mongoose = require('mongoose');
var random = require('mongoose-random');

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

userModelSchema.plugin(random, { path: 'r' });

// var userModelInstance = new userModel({firstName: 'Toni', lastName: 'Hase', email: 'toni.hase@gmx.de'});
// userModelInstance.save(function(err){
//     if(err) return __handleError(err);
// });
//
// // find all athletes who play tennis, selecting the 'name' and 'age' fields
// userModel.find({ 'firstName': 'bla' }, 'lastName email', function (err, result) {
//     if (err) return handleError(err);
//     console.log(result);
// });


module.exports = mongoose.model('userModel', userModelSchema);