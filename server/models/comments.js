var db = require('../../config/db');


exports.all = function (cb) {
    db.get().collection("comments").find().toArray(function (err, docs) {
        cb(err, docs);
    });
}

exports.delete = function (cb) {
    db.get().collection('comments').drop(function (err, data) {
        cb(err, data);
    })
}

exports.addComment = function (comment,cb) {
    db.get().collection('comments').insert(comment, function (err, response) {
        cb(err, response);
    })
}