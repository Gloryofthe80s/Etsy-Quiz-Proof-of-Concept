$(document).ready(function () {

    $('#launch-modal').click(); // launch modal straight away
    $('#start-quiz').button('loading');
    window.expensiveItems = new ExpensiveItemsCollection();
    window.cheapItems = new CheapItemsCollection();

    loadCollections = function() {
        cheapItems.fetch({
          success: function () {
            expensiveItems.fetch({
              success: function() {
                console.log('collections loaded!')
                $('#start-quiz').button('reset');
              }
          })
        }
        });
    }();




    $('#start-quiz').on('click', function() {
            console.log('quiz loaded!');

            $('#quiz-wrapper').html('');

            _.each(cheapItems.models, function(el, i) {
                new ItemView({model: el});
            });

            _.each(expensiveItems.models, function(el, i) {
                new ItemView({model: el});
            });
    });


    var router = new MainRouter();

    Backbone.history.start();

});
