requirejs.config({
    baseUrl: "/js/lib",
    paths: {
        jquery: 'jquery-3.3.1.min',
        backbone: 'backbone',
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
    }
});


require(["controllers/CommentsController"],
    function (CommentsController) {

    CommentsController.start();

        // var commentcollection = new CommentCollection();
        // commentcollection.fetch();
        //
        // console.log(CommentCollection);
        //
        // var commentsView = new commentsview({collection: commentcollection});
        // $("#comments .comments").append(commentsView.render().el);


    });