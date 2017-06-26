/**
 * Created by chao on 2017/6/9.
 */
moduleCourse.config(function ($stateProvider) {
    $stateProvider
        .state('csails.course', {
            cache: false,
            url: '/course',
            views:{
                'csails-main':{
                    templateUrl: 'templates/course.html',
                    controller: 'CourseController'
                }
            }

        })

});