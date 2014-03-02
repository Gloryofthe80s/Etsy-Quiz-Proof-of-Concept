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
        var renderedTemplate = this.template(this.model.attributes);
        this.$el.append( renderedTemplate );
    }
});

var RowView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    left: {},
    right: {},

    initialize: function() {
        //this.render();
    },

    render: function() {
        // my left item
        var left = this.left;
        var right = this.right;

        var items = [left, right];
        items = _.shuffle(items);

        var theRow = this.el.text();
        this.$el.append( theRow );

        //randomizer function
        //new ItemView w expensive-item-model
        //new ItemView w cheap-item-model
    }
});


// this is the controller. or wherever you're going to call the 'render' function
// for the RowView

var row = new RowView(),
    cheapItem = new ItemView();

cheapItem.image = this.model.Images[0].url_570xN;

// you've already figured out the order
row.left = cheapItem; // whatever the item is
row.right = {}; // whatever for the right

row.render();
