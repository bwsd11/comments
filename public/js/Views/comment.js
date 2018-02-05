define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var CommentView = Backbone.View.extend({
        tagName: 'li',
        url: '/comment',
        template: "#comments_t",
        // template: _.template('<p class="date"><%=date%></p><p class="title">Имя:</p><p><%= name %></p><p class="title">Тема:</p><p><%= title %></p><p class="title">Комментарий</p><p><%= text %></p>'),

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


