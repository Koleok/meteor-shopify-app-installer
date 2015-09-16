Meteor.methods({
    'shopify/getInstallURL': function(shop) {
        return 'https://' + shop + '.myshopify.com/admin/oauth/authorize?' +
            'client_id=' + Meteor.settings.shopify.apiKey +
            '&scope=' + Meteor.settings.shopify.scopes +
            '&redirect_uri=' + Meteor.settings.shopify.appUrl + '/shopify/authenticate';
    },
    'shopify/getShopifyConfig': function() {
        return {
            appUrl: Meteor.settings.shopify.appUrl,
            shop: '',
            apiKey: Meteor.settings.shopify.apiKey,
            scopes: Meteor.settings.shopify.scopes,
            authSuccessRoute: ''
        }
    }
});