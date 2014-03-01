var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'choices-container',

    template: _.template($('#items-page-template').text()),

    events: {
    },

    initialize: function() {
        $('.main-container').append( this.el ); //empty tag into DOM

        this.render();
    },

    render: function() {
        var renderedTemplate = this.template(this.model.attributes);
        this.$el.append( renderedTemplate );
    }
});