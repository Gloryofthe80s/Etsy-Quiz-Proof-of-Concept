var Item = Backbone.Model.extend({});

// ------

var ItemsCollection = Backbone.Collection.extend({
  model: Item,

  url: "https://api.etsy.com/v2/listings/active.js?api_key=gpby6hrhuzepnv0rx17946lk&callback=?",

  initialize: function() {
    this.fetch();
    console.log(this);
  },

  //filter the returned object to cancel everything but the results prop
  parse: function(response) {
    return response.results;
  }
});