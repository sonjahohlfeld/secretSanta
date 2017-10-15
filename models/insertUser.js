/**
 * Created by sonja on 10/15/17.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userModelSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
});

userModelSchema
    .virtual('fullName')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    });

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