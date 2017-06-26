/**
 * Created by chao on 2017/6/9.
 */
moduleMain.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            cache: false,
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
});