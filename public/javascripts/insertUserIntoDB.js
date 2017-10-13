/**
 * Created by sonja on 10/13/17.
 */

function insertUserIntoDB(username, email){
    console.log("hello world");
    console.log(typeof app);
    console.log(typeof db);
    db.connect(url, function (err, db) {
        if(err) throw err;
        var user = {username: username, email: email};
        db.collection("users").insert(user, function(err, res){
            if(err) throw err;
            console.log("create user");
            db.close();
        });
    });
}
