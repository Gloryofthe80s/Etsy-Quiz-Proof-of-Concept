$(document).ready(function () {

    window.expensiveItems = new ExpensiveItemsCollection();
    window.cheapItems = new CheapItemsCollection();

    expensiveItems.on('add',function(newItem){
        new ItemView({model: newItem})
    });

    cheapItems.on('add',function(newItem){
        new ItemView({model: newItem})
    });

    var router = new MainRouter();

    Backbone.history.start();

});

