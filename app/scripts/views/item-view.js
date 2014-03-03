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
        console.log(this.model);
        var renderedTemplate = this.template(this.model.attributes);
        this.$el.append( renderedTemplate );
    }
});

var RowView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    contents: [],

    leftTemplate: _.template($('#item-left-template').text()),
    rightTemplate: _.template($('#item-right-template').text()),

    initialize: function() {
        $('#quiz-wrapper').append( this.el ); //row into DOM
        this.render();
    },

    render: function() {
        new ItemView({model: actualQuiz[0]});
        new ItemView({model: actualQuiz[1]});
    }
});

// cheapItem.image = this.model.Images[0].url_570xN;


