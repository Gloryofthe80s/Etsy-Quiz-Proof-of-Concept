var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'choices-container',

    template: _.template($('#items-page-template').text()),

    events: {
    },

    initialize: function() {
        $('#quiz-wrapper').append( this.el ); //empty tag into DOM

        this.render();
    },

    render: function() {
        console.log(this.model.attributes);
        var renderedTemplate = this.template(this.model.attributes);
        this.$el.append( renderedTemplate );
    }
});

var RowView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',

    leftTemplate: _.template($('#item-left-template').text()),
    rightTemplate: _.template($('#item-right-template').text()),

    initialize: function() {
        $('#quiz-wrapper').append( this.el ); //row into DOM
    },

    render: function() {
        new ItemView({model: this.items[0]});
        new ItemView({model: this.items[1]});
        // leftTemplate(this.items[0]);
        // rightTemplate(this.items[1]);
    }
});

// cheapItem.image = this.model.Images[0].url_570xN;


