$(document).ready(function () {
    var router = new MainRouter();

    //actually starts the router
    Backbone.history.start();

    var allItems = new ItemsCollection();

});

