



define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Comment = require('models/comment');


    var CommentsCollection = Backbone.Collection.extend({
        model: Comment,
        url: '/comments'
    });





    return CommentsCollection;
})