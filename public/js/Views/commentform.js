define(function (require) {
    var $ = require('jquery'),
        underscore = require('underscore'),
        comment = require('models/comment'),
        backbone = require('backbone');


    var CommentForm = Backbone.View.extend({
        el: '#send',

        initialize: function () {

            console.log(this);

            var Comment = new comment();
            this.model = Comment;


            this.name = $('#name');
            this.title = $('#title');
            this.text = $('#comment');


            this.name.change(function(e){
                Comment.set({name: $(e.currentTarget).val()});
            });

            this.title.change(function(e){
                Comment.set({title: $(e.currentTarget).val()});
            });

            this.text.change(function(e){
                Comment.set({text: $(e.currentTarget).val()});
            });


            $('.addcomment').click(function () {
                var $this = this;

                if ($($this).hasClass('open')) {
                    $($this).removeClass('open');
                    $($this).next().slideUp();
                } else {
                    $($this).addClass('open');
                    $($this).next().slideDown();
                }

            })
        },

        render: function () {
            return this;
        },

        events: {
            "submit": "submit"
        },

        submit: function (e) {
            e.preventDefault();

            this.collection.add(this.model);
        },


    });



    return CommentForm;

})