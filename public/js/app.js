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


require(["jquery", "collections/CommentCollection", "models/comment", "views/CommentsView"], function ($, CommentCollection, modelcomment, commentsview) {
    $(document).ready(function () {


        var commentcollection = new CommentCollection([
            {
                name: "asd",
                subject: 'sub',
                message: "i'm a web programmer"
            }
        ]);

        var commentsView = new commentsview({collection: commentcollection});
        $(document.body).append(commentsView.render().el);

        // console.log(commentcollection);
        //
        // var Comment1 = new modelcomment();
        //
        // console.log(Comment1.attributes);
    });
});