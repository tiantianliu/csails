/**
 * Created by chao  on 2017/06/11.
 */
moduleArticle.controller('ArticleController', function ($scope) {
    $scope.articleLabel = Enums.ArticleType.ALL;
    $scope.changeTag = changeTag;

    function changeTag(tag) {
        if(tag == $scope.articleLabel)
            return false;
        $scope.articleLabel = tag;
    }

});