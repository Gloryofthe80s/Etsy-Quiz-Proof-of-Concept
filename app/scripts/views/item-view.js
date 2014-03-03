var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'choices-container',

    template: _.template($('#item-template').text()),

    events: {

    },

    initialize: function(options, rowDOM) {
        var theRowToAppendTo = rowDOM;

        theRowToAppendTo.append( this.el ); //empty tag into the row created in the RowView
        this.render();
    },

    render: function() {
        var renderedTemplate = this.template(this.model.attributes);

        this.$el.append( renderedTemplate );
    }
});

var RowView = Backbone.View.extend({

    tagName: 'div',
    className: 'row',

    initialize: function(options) {
        $('#quiz-wrapper').append( this.el ); //row into DOM

        this.modelA = options.modelA;
        this.modelB = options.modelB;

        //change image URL to something simpler for template
        this.modelA.attributes.image = this.modelA.get('Images')[0].url_570xN;
        this.modelB.attributes.image = this.modelB.get('Images')[0].url_570xN;


        this.render();
    },

    render: function() {
        var rowDOM = this.$el;
        this.$el.append(new ItemView({model: this.modelA}, rowDOM));
        this.$el.append(new ItemView({model: this.modelB}, rowDOM));
    }
});
