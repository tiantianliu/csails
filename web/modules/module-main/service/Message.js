/**
 * Created by chao on 2017/6/20.
 */
moduleMain.factory('$$Message',function (SweetAlert) {

    return {
        showConfirm:function (content) {
            var options= {
                title: '确认',
                text: content,
                type: "warning",
                showCancelButton: true
            }
            return SweetAlert.confirm(content, options);

        },
        // An alert dialog
        showAlert: function (content) {
            var options= {
                title: '警告',
                text: content,
                type: "warning",
                showCancelButton: false
            }
            return SweetAlert.alert(content, options);
        },
        showError: function (content, title) {
            return SweetAlert.error(content, {title: '错误'});
        },
        info: function (content) {
            return SweetAlert.info(content, {title: '提示'});
        },
        success:function (content,title) {
            return SweetAlert.success(content, {title: '成功'});
        }
    }
    
})
