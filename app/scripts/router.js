var MainRouter = Backbone.Router.extend({

    routes: {
        "home" : "homePage",
        "items" : "itemsPage",
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

    itemsPage: function() {
        console.log('Items page!')
        $('.main-container').html('');
        $('.main-container').append(new ItemsPageView());
    },

    contactPage: function() {
        console.log('Contact page!')
        $('.main-container').html('');
        $('.main-container').append(new ContactPageView());
    }
});