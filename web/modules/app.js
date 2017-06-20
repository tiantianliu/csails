/**
 * Created by chao on 2017/6/9.
 */
var loadModules = ['ngRoute', 'ngResource', 'ngAnimate', 'ui.router', 'ngDialog', 'ngFileUpload',
    'sails.moduleMain', 'sails.moduleCommon', 'sails.moduleResource', 'sails.moduleUtils'];
var myApp = angular.module('myApp', loadModules);
myApp.run(function ($rootScope, $state) {

});
myApp.config(function ($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
    $httpProvider.interceptors.push('ResponseErrorInterceptor');
    $urlRouterProvider.otherwise('/menu');
});
