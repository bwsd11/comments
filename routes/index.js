var express = require('express');
var router = express.Router();
var moment = require('moment');
var conform = require('conform');

var db = require('../config/db');

var mongoose = require('mongoose');

mongoose.connect(db.url);
var db = mongoose.connection;
var objectId = require('mongodb').ObjectId;

/* GET home page. */

var title = 'Комментарии';


var com = {
    name: 'sdmwasdfsdfdf',
    sub: 'subject',
    comment: 'комментарий comment'
}


console.log(conform.validate(com, {
    properties: {
        name: {
            type: 'string',
            required: true,
            minLength: 10,
            pattern: /^[a-z]+$/,
            messages: {
                type: 'Должны быть только буквы',
                required: 'Имя - обязательное поле',
                minLength: 'Минимальное количество символов - 10',
                pattern: 'Должны быть только английские символы',


            }
        }

    }
}))

asd 


router.get('/', function (req, res) {
    db.collection('comments').find().toArray(function (err, docs) {
        if (err)
            console.log(err);

        console.log(docs);
        // var now = moment('2018-01-22T01:00:00+03:00');
        moment.lang('ru');

        // var date = moment(now).startOf('hour').fromNow();

        docs.forEach(function (v) {
            v.date = moment(v.date).startOf('hour').fromNow();
            console.log(v.date);
        })


        res.render('index', {title: title, comments: docs});
    })

});

router.get('/delete', function (req, res) {
    db.collection('comments').drop(function (err, data) {
        if (err)
            res.send(err);

        res.send(data);
    })
})

router.get('/:id', function (req, res) {
    console.log(req.params);

    db.collection('comments').findOne({_id: objectId(req.params.id)}, function (err, data) {
        res.send(data);
        res.render('index', {title: title, comments: data});
    })
})


router.post('/add', function (req, res) {
    var comment = {
        date: moment().format(),
        name: req.body.name,
        title: req.body.title,
        text: req.body.comment
    }


    db.collection('comments1').insert(comment, function (err, res) {
        if (err)
            console.log(err);

    })
    db.collection('comments').find().toArray(function (err, docs) {
        if (err)
            console.log(err);
        console.log(docs);
        res.render('index', {title: title, comments: docs});
    })
})

module.exports = router;
