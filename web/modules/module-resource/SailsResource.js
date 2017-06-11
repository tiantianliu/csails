/**
 * Created by chao on 2017/6/11.
 */
moduleResource.factory('SailsResource', ['$resource', function ($resource) {
    return function (url, params, methods) {
        var defaults = {
            update: {method: 'put', isArray: false}
        };

        methods = angular.extend(defaults, methods);

        var resource = $resource(url, params, methods);
        resource.prototype.$saveOrUpdate = function (params, successFun, failedFun) {
            if (StringUtils.isNlOrUndOrEmpty(this.id)) {
                return this.$save(params, successFun, failedFun);
            } else {
                return this.$update(params, successFun, failedFun);
            }
        };

        return resource;
    };
}]);