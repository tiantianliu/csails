/**
 * Created by chao on 2017/6/11.
 */
moduleMain.factory('SailsLog', function ($log) {
    return {
        info: $log.info,
        debug: $log.debug,
        log: $log.log,
        warn: $log.warn
    }
});
