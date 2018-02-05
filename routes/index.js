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




router.get('/', function (req, res) {
    res.render('index', { title: 'ejs'});

})

router.get('/comments', function (req, res) {



    db.collection('comments').find().toArray(function (err, docs) {
        if (err)
            console.log(err);

        console.log(docs);
        moment.locale('ru');


        docs.forEach(function (v) {
            v.date = moment(v.date).fromNow();
        })

        console.log('sdfasdfasdfasdfasdfasdfasdf');
        console.log(docs);


        res.send(docs);
        // res.render('index', {title: title, comments: docs});
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


router.post('/comments', function (req, res) {
    var comment = {
        date: req.body.date,
        name: req.body.name,
        title: req.body.title,
        text: req.body.text
    }

    console.log(req.body);


    var validate = conform.validate(comment, {
        properties: {
            name: {
                pattern: /^[a-z]{4,}$/,
                message: 'не меньше 4х английских букв'
            }
            // title: {
            //     pattern: /^[а-я]{4,}$/,
            //     message: 'не меньше 4х русских букв'
            // },
            // text: {
            //     pattern: /^[a-z]{4,}$/,
            //     message: 'не меньше 4х английских букв'
            // }

        }
    })


    console.log(validate);

    if(!validate.valid)
        res.send(validate);


    if (validate.valid)

        db.collection('comments').insert(comment, function (err, response) {
            if (err)
                console.log(err);

            res.send(validate);

        })
    // db.collection('comments').find().toArray(function (err, docs) {
    //     if (err)
    //         console.log(err);
    //     console.log(docs);
    //     res.render('index', {title: title, comments: docs});
    // })
})

module.exports = router;
