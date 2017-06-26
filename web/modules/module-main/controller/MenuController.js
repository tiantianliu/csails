/**
 * Created by chao on 2017/6/11.
 */
moduleMain.controller('MenuController', function ($scope,$rootScope,$state,$$Message) {
    $scope.goTo = goTo;


    function goTo(state) {
        $state.go(state);

    }

});