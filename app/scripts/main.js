$(document).ready(function () {

    $('#launch-modal').click(); // launch modal straight away
    $('#start-quiz').button('loading');
    window.expensiveItems = new ExpensiveItemsCollection();
    window.cheapItems = new CheapItemsCollection();
    window.actualQuiz = [];

    loadCollections = function() {
        cheapItems.fetch({
          success: function () {
            expensiveItems.fetch({
              success: function() {
                console.log('collections loaded!')
                expensiveItems = expensiveItems.shuffle();
                cheapItems = cheapItems.shuffle();

                for (var i = 0; i > 14; i++) {
                    var staging = [expensiveItem[i], cheapItem[i]]
                    staging.shuffle();

                    //put the 'mini-array' pair in the actual array
                    actualQuiz.push(staging);
                };
                $('#start-quiz').button('reset');
              }
          })
        }
        });
    }();




    $('#start-quiz').on('click', function() {
            console.log('quiz loaded!');

            $('#quiz-wrapper').html('');
            _.each(actualQuiz, function(i) {
                var aRow = new RowView();
                aRow.items = actualQuiz[i];
                aRow.render();
            })
    });


    var router = new MainRouter();

    Backbone.history.start();

});
