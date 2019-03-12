var friendsArray = require("../app/data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    app.post("/api/friends", function(req, res) {
        friendsArray.push(req.body);
       
    });
    // app.post("/api/friends", function(req, res) {
    //     var totDiff;
    //     var diffArry = [];
    //     var newFriend = req.body;
    //     for (var i = 0; i < friendsArray.length; i++) {
    //         totDiff = 0;
    //         for (var j = 0; j < newFriend.scores.length; j++) {
    //             totDiff += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
    //         } //for j
    //         diffArry.push(totDiff);
    //     }
    //     var bestFriend = diffArry.indexOf(Math.min(...diffArry));
       
    // });
}