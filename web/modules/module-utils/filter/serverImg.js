/**
 * Created by luan on 17/06/19.
 */
moduleUtils.filter('serverImg', function () {
	return function (url) {
		if (!StringUtils.isNlOrUndOrEmpty(url)) {
			return server_www + url;
		}
		return url;
	};
});