/*global RouterExample, $*/


// window.RouterExample = {
//     Models: {},
//     Collections: {},
//     Views: {},
//     Routers: {},
//     init: function () {
//         'use strict';
//         console.log('Hello from Backbone!');
//     }
// };

$(document).ready(function () {
    var routeMeBaby = new MainRouter();

    //actually starts the router
    Backbone.history.start();


});
