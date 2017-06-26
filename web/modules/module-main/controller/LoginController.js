/**
 * Created by chao  on 2017/06/11.
 */
moduleMain.controller('LoginController', function ($scope,$rootScope,$state,SailsLog,$log,UserResource) {
    $scope.login= login;
    $scope.$on("$viewContentLoaded",function(){

    });

    function login(){
        // var userResource = new UserResource($scope.user);
        // userResource.$login(function (userBean) {
        //     $state.go('menu');
        // })
        $state.go('csails.about');
    }

});