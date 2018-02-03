define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Commentview = require('views/comment');

    var CommentsView = Backbone.View.extend({
        tagName: 'ul',
        self: this,

        initialize: function () {
            console.log(this);

            this.collection.on('add', this.addOne, this);

        },

        addOne: function (model) {

            var commentView = new Commentview({model: model});
            this.$el.append(commentView.render().el);

        },

        render: function () {


            this.collection.each(function (model) {
                var commentView = new Commentview({model: model});
                this.$el.append(commentView.render().el);
            }, this);

            return this;
        },

        validate: function (model, data) {


            if (data.valid) {
                var commentView = new Commentview({model: model});
                this.$el.append(commentView.render().el);
            } else {
                $(".errors").html('');
                data.errors.forEach(function (elem) {
                    $(".errors").append('<p>'+elem.message+'</p>');
                })
            }
        }
    })

    return CommentsView;

})