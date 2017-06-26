/**
 * Created by chao on 2017/6/9.
 */
moduleArticle.config(function ($stateProvider) {
    $stateProvider
        .state('csails.article', {
            cache: false,
            url: '/article',
            views:{
                'csails-main':{
                    templateUrl: 'templates/article.html',
                    controller: 'ArticleController'
                }
            }

        })

});