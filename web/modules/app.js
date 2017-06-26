/**
 * Created by chao on 2017/6/9.
 */
var loadModules = ['ngRoute', 'ngResource', 'ngAnimate', 'ui.router', 'ngDialog', 'ngFileUpload','ng-sweet-alert',
    'sails.moduleMain', 'sails.moduleCommon', 'sails.moduleResource', 'sails.moduleUtils','sails.modulePersonal',
    'sails.moduleCourse','sails.moduleAbout','sails.moduleMessage','sails.moduleArticle'];
var myApp = angular.module('myApp', loadModules);
myApp.run(function ($rootScope, $state) {

});
myApp.config(function ($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
    $httpProvider.interceptors.push('ResponseErrorInterceptor');
    $stateProvider
        .state('csails', {
            url: "/csails",
            abstract:true,
            templateUrl: "templates/menu.html",
            controller: 'MenuController',
        });
    $urlRouterProvider.otherwise('/csails/article');
});
