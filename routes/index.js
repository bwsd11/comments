var express = require('express');
var router = express.Router();
var moment = require('moment');
var conform = require('conform');


var CommentController = require('../server/controllers/comments');

moment.locale('ru');


var db;

/* GET home page. */

var title = 'Комментарии';

router.get('/', function (req, res) {
    res.render('index', {title: 'Комментарии'});
});

router.get('/comments', CommentController.all);

router.get('/delete', CommentController.delete);

// router.get('/:id', function (req, res) {
//     console.log(req.params);
//
//     db.collection('comments').findOne({_id: objectId(req.params.id)}, function (err, data) {
//         res.send(data);
//         res.render('index', {title: title, comments: data});
//     })
// })


router.post('/comments', CommentController.addComment);


module.exports = router;
