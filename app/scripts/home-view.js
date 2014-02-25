var HomePageView = Backbone.View.extend({
    tagName: 'div',
    className: 'jumbotron',

    template: _.template($('#home-page-template').text()),

    events: {

    },

    initialize: function() {
        $('.main-container').append( this.el ); //empty tag into DOM

        this.render();
    },

    render: function() {
        var renderedTemplate = this.template();

        this.$el.html( renderedTemplate );
    }
});