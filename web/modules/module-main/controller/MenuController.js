/**
 * Created by chao on 2017/6/11.
 */
moduleMain.controller('MenuController', function ($scope,$rootScope,$state,$$Message) {

    $scope.a=function () {
        $$Message.showConfirm().then(function (isOk) {
            console.log(isOk);
        })
        // Alert.success('11111','2222');
    }

});