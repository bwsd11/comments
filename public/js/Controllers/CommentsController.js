define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Commentsview = require('views/CommentsView'),
        CommentsCollection = require('collections/CommentCollection');


    var CommentsController = Backbone.Router.extend({

        start: function () {
            var commentsCollections = new CommentsCollection({});
            commentsCollections.fetch();

            console.log(commentsCollections);

            var commentsView = new Commentsview({collection: commentsCollections});
            $("#comments .comments").append(commentsView.render().el);
        }

    });

    var commentsController = new CommentsController();


    return commentsController;
})