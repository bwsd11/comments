var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectID;


var dbName = 'comments';

var state = {
    db: null
};


var url = 'mongodb://vlad:1q2w3e4r5t@ds211088.mlab.com:11088/comments';


if (!state.db) {
    mongoClient.connect(url, function (err, client) {
        state.db = client.db(dbName);
    });
}


exports.get = function () {
    return state.db;
}