// Define route
Router.route('shopifyAppInstaller', {
    path: '/shopify/app-installer',
});

Template.shopifyAppInstaller.events({
    'click #install': function(event, template) {
        var $shopName = $('#shopName').val();

        var url = Meteor.call(
            'shopify/getInstallURL',
            $shopName,
            function(err, success) {}
        );

        // Do the redirect to shopify
        // window.location.replace(url);
    }
});