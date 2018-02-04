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


            this.name = $('#name');
            this.title = $('#title');
            this.text = $('#text');


            this.name.change(function (e) {
                Comment.set({name: $(e.currentTarget).val()});
            });

            this.title.change(function (e) {
                Comment.set({title: $(e.currentTarget).val()});
            });

            this.text.change(function (e) {
                Comment.set({text: $(e.currentTarget).val()});
            });

            $(this.el).on('submit', function (e) {
                e.preventDefault();
                self.submit();
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


        submit: function () {
            var self = this;

            var current_time = moment().format();
            this.model.set({date: current_time});

            this.model.save(null, {
                success: function (model, res, op) {
                    self.validate(model, res);
                },
                error: function (model, xhr, op) {
                    console.log(xhr);
                }
            });


        },

        validate: function (model, data) {


            var $el = $(this.el);
            var id_form = $el.attr('id');

            $('#' + id_form + " .error").html('');

            console.log(data);

            if (data.valid) {

                this.collection.add(model);

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