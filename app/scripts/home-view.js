var HomePageView = Backbone.View.extend({
    tagName: 'div',
    className: 'jumbotron',

    template: _.template($('#main-page-template').text()),

    events: {

    },

    initialize: function() {
        $('main-container').append( this.el ); //empty tag into DOM

        this.render();

        this.listenTo(this.model, 'change', this.render)
    },

    render: function() {
        var renderedTemplate = this.template( this.model.attributes );

        this.$el.html( renderedTemplate );
    }
});