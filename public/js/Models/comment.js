define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');


    var Comment = Backbone.Model.extend({
        defaults: {
            name: 'Dima',
            title: 'web',
            text: 'i\'m a web developer'
        },
        url: '/comments'
    });

    return Comment;
});