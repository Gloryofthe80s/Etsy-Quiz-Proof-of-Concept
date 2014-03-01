var CheapItemsCollection = Backbone.Collection.extend({
    model: Item,

    url: "https://api.etsy.com/v2/listings/active.js?limit=200&sort_on=price&tags=art,painting&includes=Images&api_key=gpby6hrhuzepnv0rx17946lk&callback=?",

    initialize: function() {
        this.fetch();
        //console.log(this);
    },

    //filter the returned object to cancel everything but the results prop
    parse: function(response) {
        return response.results;
    }
});