/**
 * Created by chao on 2017/6/9.
 */
moduleMain.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            cache: false,
            url: '/login',
            views:{
                'main':{
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController'
                }

            }
        })
        .state('menu', {
            cache: false,
            url: '/menu',
            views:{
                'main':{
                    templateUrl: 'templates/menu.html',
                    controller: 'MenuController'
                }

            }

        })

});