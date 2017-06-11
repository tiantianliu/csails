/**
 * Created by chao on 2017/6/11.
 */
function URLParam() {
    var authToken, version, appType, client;
    this.setAuthToken = function (at) {
        authToken = at;
    };

    this.setVersion = function (appVersion, htmlVersion) {
        version = appVersion + "." + htmlVersion;
    };

    this.setAppType = function (at) {
        appType = at;
    };

    this.setClient = function (ct) {
        client = ct;
    };

    this.getUrl = function (url) {
        var params = getParamsObjFromUrl(url);
        // params[URLParam.AUTH_TOKEN] = authToken;
        // params[URLParam.DEFAULT_VERSION] = version;
        params[URLParam.APPLICATION_TYPE] = appType;
        params[URLParam.APPLICATION_CLIENT] = client;
        return getUrlFromParamsObj(url, params);
    };
}

// URLParam.AUTH_TOKEN = 'token';
// URLParam.DEFAULT_VERSION = 'version';
URLParam.APPLICATION_TYPE = 'type';
URLParam.APPLICATION_CLIENT = 'client';
