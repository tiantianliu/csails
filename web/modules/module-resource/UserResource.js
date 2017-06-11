/**
 * Created by chao on 2017/6/11.
 */
moduleResource.factory('UserResource', function (SailsResource, $q, $$SailsConfig) {
    var UserResource =SailsResource($$SailsConfig.RESOURCE_URL + '/user/:userId', {}, {
        login: {
            url: $$SailsConfig.RESOURCE_URL + '/user/login',
            method: 'POST',
            isArray: false
        },
        register: {
            url: $$SailsConfig.RESOURCE_URL + '/user/register',
            method: 'POST',
            isArray: false
        }
    });
    return UserResource;
});