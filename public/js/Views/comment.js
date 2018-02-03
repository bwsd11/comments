define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var CommentView = Backbone.View.extend({
        tagName: 'li',

        template: "#comments_t",

        initialize: function () {
            this.render();
        },

        render: function () {
            var template = _.template($(this.template).html());
            this.$el.html(template(this.model.toJSON()));

            return this;
        }
    });


    return CommentView;

})


