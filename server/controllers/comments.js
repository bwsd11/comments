var comments = require('../models/comments');
var moment = require('moment');
var conform = require('conform');

exports.all = function (req, res) {
    comments.all(function (err, docs) {
        if (err) {
            console.log(err);
            res.status('500');
        }

        docs.forEach(function (v) {
            v.date = moment(v.date).fromNow();
        })

        res.send(docs);
    })
};


exports.delete = function (req, res) {
    comments.delete(function (err, data) {
        if (err)
            res.send(err);

        res.send(data);
    })
};


exports.addComment = function (req, res) {
    var comment = {
        date: req.body.date,
        name: req.body.name,
        title: req.body.title,
        text: req.body.text
    }


    var validate = conform.validate(comment, {
        properties: {
            name: {
                pattern: /^[a-zа-я]{4,}$/i,
                message: 'не меньше 4х символов'
            },
            title: {
                pattern: /^[а-яa-z0-9]{4,}$/i,
                message: 'не меньше 4х символов'
            },
            text: {
                pattern: /^[a-zа-я0-9]{4,}$/i,
                message: 'не меньше 4х символов'
            }

        }
    })


    console.log(validate);

    if (!validate.valid)
        res.send(validate);


    if (validate.valid)

        comments.addComment(comment, function (err, data) {
            if (err)
                console.log(err);

            res.send(validate);
        })


}