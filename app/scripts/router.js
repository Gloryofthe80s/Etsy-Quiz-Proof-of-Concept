var MainRouter = Backbone.Router.extend({

    routes: {
        "home" : "homePage"
        "about" : "aboutPage",
        "about/:name" : "aboutPage"
        "contact" : "contactPage"
    },

    initialize: function() {
        console.log('Router initialized!')
    },

    homePage: function() {

    },

    aboutPage: function() {

    }

    contactPage: function() {

    }
});