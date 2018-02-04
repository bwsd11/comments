requirejs.config({
    baseUrl: "/js/lib",
    paths: {
        jquery: 'jquery-3.3.1.min',
        backbone: 'backbone',
        moment: 'moment/moment',
        underscore: 'underscore',
        collections: '../Collections',
        controllers: '../Controllers',
        models: '../Models',
        views: '../Views'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        }

    },
    packages: [{
        name: 'moment',
        location: 'moment',
        main: 'moment'
    }]


});


require(["controllers/CommentsController"],
    function (CommentsController) {

    new CommentsController();

    });