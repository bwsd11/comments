define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Commentview = require('views/comment');

    var CommentsView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function () {
            console.log(this);

            this.collection.on('add', this.addOne, this);

        },

        addOne: function (model) {
            var commentView = new Commentview({model: model});
            this.$el.append(commentView.render().el);
            // model.save();
        },

        render: function () {


            this.collection.each(function (model) {
                console.log(model);
                var commentView = new Commentview({model: model});
                this.$el.append(commentView.render().el);
            }, this);

            return this;
        }
    })

    return CommentsView;

})