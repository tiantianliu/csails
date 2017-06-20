/**
 * Created by chao on 2017/6/20.
 */
moduleMain.factory('$$Message',function (SweetAlert) {

    return {
        showConfirm:function (title) {
            return SweetAlert.success("You have successfully completed our poll!", {title: "Good job!"});

        }
    }
    
})
