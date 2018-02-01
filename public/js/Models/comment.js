requirejs.config({
    baseUrl: "/js/lib",
    paths: {
        jquery: 'jquery-3.3.1.min',
        backbone: 'backbone',
        underscore: 'underscore',
        appControllers: '../Controllers',
        appModels: '../Models',
        appViews: '../Views'
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

define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');


    var Comment = Backbone.Model.extend({
        defaults: {
            name: 'Dima',
            subject: 'web',
            message: 'i\'m a web developer'
        },
    });

    return Comment;
});