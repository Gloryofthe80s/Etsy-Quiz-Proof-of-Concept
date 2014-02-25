var MainRouter = Backbone.Router.extend({

    routes: {
        "home" : "homePage",
        "about" : "aboutPage",
        "about/:name" : "aboutPage",
        "contact" : "contactPage"
    },

    initialize: function() {
        console.log('Router initialized!');
    },

    homePage: function() {
        console.log('Home page!')
        $('.main-container').html('');
        $('.main-container').append(new HomePageView());
    },

    aboutPage: function() {
        console.log('About page!')
        $('.main-container').html('');
        $('.main-container').append(new AboutPageView());
    },

    contactPage: function() {
        console.log('Contact page!')
        $('.main-container').html('');
        $('.main-container').append(new ContactPageView());
    }
});