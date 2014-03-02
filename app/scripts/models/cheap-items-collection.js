var CheapItemsCollection = Backbone.Collection.extend({
    model: CheapItem,

    url: "https://api.etsy.com/v2/listings/active.js?limit=250&tags=art,painting&min_price=40&max_price=100&includes=Images&api_key=gpby6hrhuzepnv0rx17946lk&callback=?",

    initialize: function() {

    },

    //filter the returned object to cancel everything but the results prop
    parse: function(response) {
        return response.results;
    }
});
