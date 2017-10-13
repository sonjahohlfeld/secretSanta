/**
 * Created by sonja on 10/13/17.
 */

function insertUserIntoDB(username, email){
    var user = {username: username, email: email};
    db.collection("users").insert(user, function(err, res){
        if(err) throw err;
        console.log("create user");
        db.close();
    });
}
