var ExpensiveItemsCollection = Backbone.Collection.extend({
    model: ExpensiveItem,

    url: "https://api.etsy.com/v2/listings/active.js?limit=50&tags=art,painting&min_price=1000&max_price=5000&includes=Images&api_key=gpby6hrhuzepnv0rx17946lk&callback=?",

    initialize: function() {

    },

    //filter the returned object to cancel everything but the results prop
    parse: function(response) {
        return response.results;
    }
});
