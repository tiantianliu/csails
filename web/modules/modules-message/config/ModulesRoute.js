/**
 * Created by chao on 2017/6/9.
 */
moduleMessage.config(function ($stateProvider) {
    $stateProvider
        .state('csails.message', {
            cache: false,
            url: '/message',
            views:{
                'csails-main':{
                    templateUrl: 'templates/message.html',
                    controller: 'MessageController'
                }
            }

        })

});