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
            exports: 'backbone'
        }
    }
});


require(["jquery", "collections/CommentCollection", "models/comment", "views/CommentsView"],
    function ($, CommentCollection, modelcomment, commentsview) {
    $(document).ready(function () {

        //
        // var commentcollection = new CommentCollection([
        //     {
        //         name: "asd",
        //         subject: 'sub',
        //         message: "i'm a web programmer"
        //     }
        // ]);
        //
        // var comments = new CommentCollection();
        // comments.fetch();





        var commentsView = new commentsview({collection: CommentCollection});
        $("#comments .comments").append(commentsView.render().el);


    });
});