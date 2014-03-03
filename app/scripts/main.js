$(document).ready(function () {

    $('#launch-modal').click(); // launch modal straight away
    $('#start-quiz').button('loading'); //disallow user from proceeding until assets are loaded

    window.expensiveItems = new ExpensiveItemsCollection();
    window.cheapItems = new CheapItemsCollection();
    window.actualQuiz = [];

    var collectionsReady = 0;

    cheapItems.fetch({success: function() {
        collectionsReady ++;
    }});

    expensiveItems.fetch({success: function() {
        collectionsReady ++;
    }});

    var checkReadyLoop = setInterval(function(){
      if (collectionsReady === 2) {
        generateQuiz();
        clearInterval(checkReadyLoop);
      }
    }, 50);

    function generateQuiz() {
        expensiveItems = expensiveItems.shuffle();
        cheapItems = cheapItems.shuffle();

        for (var i = 0; i <= 14; i++) {
            var staging = [expensiveItems[i], cheapItems[i]];
            staging = _.shuffle(staging);

            //put the 'mini-array' pair in the actual array
            actualQuiz.push(staging);

            //clear BS loading button to allow user to proceed
            $('#start-quiz').button('reset');
        }
    }

    //on quiz launch
    $('#start-quiz').on('click', function() {
        _.each(actualQuiz, function(setOfItems) {
            new RowView({modelA: setOfItems[0], modelB: setOfItems[1]});
        })
    });

});
