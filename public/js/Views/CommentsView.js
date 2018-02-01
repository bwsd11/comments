requirejs.config({
    baseUrl: "/js/lib",
    paths: {
        jquery: 'jquery-3.3.1.min',
        backbone: 'backbone',
        underscore: 'underscore',
        collections: '../Collections',
        models: '../Models',
        views: '../Views'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Commentview = require('views/comment');

    var CommentsView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function () {

        },

        render: function () {

            this.collection.each(function (val) {
                var commentView = new Commentview({model: val});
                this.$el.append(commentView.render().el);
            }, this);

            return this;
        }
    })

    return CommentsView;

})