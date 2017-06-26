/**
 * Created by chao on 2017/6/9.
 */
moduleAbout.config(function ($stateProvider) {
    $stateProvider
        .state('csails.about', {
            cache: false,
            url: '/about',
            views:{
                'csails-main':{
                    templateUrl: 'templates/about.html',
                    controller: 'AboutController'
                }
            }

        })

});