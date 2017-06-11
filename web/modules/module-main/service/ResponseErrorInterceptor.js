/**
 * Created by chao  on 2017/06/11.
 */
moduleCommon.factory('ResponseErrorInterceptor', function ($log, $q, $injector, $$SailsConfig) {
    $log.debug('$log is here to show you that this is a regular factory with injection');

    var interceptor = {};
    var authToken = null;
    //var loadingTimeout = null;
    var $http, $timeout, $$SailsConfig,TokenService;
    // optional method
    interceptor.request = function (config) {
        initService();

        // do something on success
        var requestUrl = config.url;

        var uRLParam = new URLParam();
        uRLParam.setVersion("1.1.1", "1");
        uRLParam.setAppType($$SailsConfig.appType);
        uRLParam.setClient($$SailsConfig.client);
        config.url = uRLParam.getUrl(requestUrl);
        //PluginUtil.refresh();
        $log.debug("http request config:" + angular.toJson(config));
        return config;
    };

    var initService = function () {

        if ($http == undefined) {
            $http = $injector.get('$http');
        }

        if ($timeout == undefined) {
            $timeout = $injector.get('$timeout');
        }

        if ($$SailsConfig == undefined) {
            $$SailsConfig = $injector.get('$$SailsConfig');
        }
    };

    // optional method
    interceptor.requestError = function (rejection) {
        //hideResourceLoading(rejection.config, rejection.status);
        $log.debug("http requestError config:" + angular.toJson(rejection));
        return $q.reject(rejection);
    };


    // optional method
    interceptor.response = function (response) {
        var d = $q.defer();
        if (!response.data.errorCode) {
            d.resolve(response);
            return d.promise;
        } else {
            return processError(d, response);
        }
    };

    // optional method
    var processError = function (d, response) {

    };
    var setAuthtoken = function (at) {
        authToken = at;
    };

    return {
        'request': interceptor.request,
        'requestError': interceptor.requestError,
        'response': interceptor.response,
        'responseError': interceptor.responseError,
        'setAuthtoken': setAuthtoken
    }
});