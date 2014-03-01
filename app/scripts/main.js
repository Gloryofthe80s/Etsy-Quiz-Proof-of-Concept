$(document).ready(function () {

    window.expensiveItems = new ExpensiveItemsCollection();
    window.cheapItems = new CheapItemsCollection();
      
    var router = new MainRouter();

    Backbone.history.start();

});

