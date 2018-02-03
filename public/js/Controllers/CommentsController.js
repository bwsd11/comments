define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Commentsview = require('views/CommentsView'),
        CommentsCollection = require('collections/CommentCollection'),
        CommentFormView = require('views/commentform');


    var CommentsController = Backbone.Router.extend({

        initialize: function () {
            var commentsCollections = new CommentsCollection();

            commentsCollections.fetch({
                success: function (res) {
                    var commentform = new CommentFormView({collection: commentsCollections});

                    var commentsView = new Commentsview({collection: commentsCollections});
                    $("#comments .comments").append(commentsView.render().el);
                }
            });



            // commentsCollections.on('add', commentsCollections.save());


        },

        start: function () {


        }

    });


    return CommentsController;
})