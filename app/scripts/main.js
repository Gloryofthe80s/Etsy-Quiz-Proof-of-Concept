$(document).ready(function () {
    window.items = new ExpensiveItemsCollection();

    items.on('add',function(newItem){
        console.log('ADD EVENT!')
        new ItemsPageView({model: newItem})
    });

    var router = new MainRouter();

    //actually starts the router
    Backbone.history.start();

});

