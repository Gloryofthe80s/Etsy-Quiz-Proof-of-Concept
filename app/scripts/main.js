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
                expensiveItems = expensiveItems.shuffle();
                cheapItems = cheapItems.shuffle();

                for (var i = 0; i <= 14; i++) {
                    var staging = [expensiveItems[i], cheapItems[i]];
                    staging = _.shuffle(staging);

                    //put the 'mini-array' pair in the actual array
                    actualQuiz.push(staging);
                };

                $('#start-quiz').button('reset');
              }
          })
        }
        });
    }();

    //on quiz launch
    $('#start-quiz').on('click', function() {
        $('#quiz-wrapper').html('');

        _.each(actualQuiz, function() {
            new RowView();
        })
    });


    var router = new MainRouter();

    Backbone.history.start();

});
