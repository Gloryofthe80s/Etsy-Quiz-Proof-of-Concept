var MainRouter = Backbone.Router.extend({

    routes: {
        "about" : "aboutPage",
        "about/:name" : "aboutPage"
    },

    initialize: function() {
        console.log('Router initialized!')
    },

    aboutPage: function(name) {
        if(name) {
            console.log("Here's a page about", name)
        } else {
        console.log("You're at the About Page!")
        }
    }
});