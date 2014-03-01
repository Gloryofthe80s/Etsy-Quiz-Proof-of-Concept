var MainRouter = Backbone.Router.extend({

    routes: {
        "home" : "homePage",
        "items" : "itemsPage",
        "contact" : "contactPage"
    },

    setActiveTab: function(tabName) {
        $('ul.nav li').removeClass('active');
        $('li a[href="#' + tabName + '"]').parent().addClass('active');
    },

    initialize: function() {
        console.log('Router initialized!');
        this.setActiveTab('');
    },

    homePage: function() {
        console.log('Home page!');
        this.setActiveTab('home');
        $('.main-container').html('');
        $('.main-container').append(new HomePageView());
    },

    itemsPage: function() {
        console.log('Items page!');
        this.setActiveTab('items');
        
        $('.main-container').html('');

        _.each(cheapItems.models, function(el, i) {
            new ItemView({model: el});
        });
    },

    contactPage: function() {
        console.log('Contact page!');
        this.setActiveTab('contact');
        $('.main-container').html('');
        $('.main-container').append(new ContactPageView());
    }
});
