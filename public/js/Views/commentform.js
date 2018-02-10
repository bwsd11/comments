define(function (require) {
    var $ = require('jquery'),
        underscore = require('underscore'),
        comment = require('models/comment'),
        moment = require('moment'),
        Backbone = require('backbone');


    var CommentForm = Backbone.View.extend({
        el: '#send',

        initialize: function () {

            var self = this;

            var Comment = new comment();
            this.model = Comment;




            $(this.el).on('submit', function (e) {
                e.preventDefault();




                Comment.set({name: $(self.el).find('#name').val()});
                Comment.set({title: $(self.el).find('#title').val()});
                Comment.set({text: $(self.el).find('#text').val()});

                var current_time = moment().format();
                Comment.set({date: current_time});

                self.model.save(null, {
                    success: function (model, res, op) {
                        self.validate(model, res);
                    },
                    error: function (model, xhr, op) {
                        console.log(xhr);
                    }
                });

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



        validate: function (model, data) {


            var $el = $(this.el);
            var id_form = $el.attr('id');
            var self = this;

            $('#' + id_form + " .error").html('');


            if (data.valid) {
                this.collection.add(model);
                $($el).remove();
                $('.addcomment').remove();
            } else {

                data.errors.forEach(function (elem) {
                    var error_block = $el.find('#' + elem.property + ' + .error');
                    error_block.append('<p>' + elem.message + '</p>');
                })
            }
        }


    });


    return CommentForm;

})