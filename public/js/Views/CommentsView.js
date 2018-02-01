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
        Comment = require('models/comment');

    var CommentsView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function () {

        },

        render: function () {
            this.collection.each(function (person) {
                var personView = new PersonView({model: person});
                this.$el.append(personView.render().el);
            }, this);

            return this;
        }
    })

    return CommentsView;

})