app.directive('photoAlbum', function () {
    'use strict';
    return {
        restrict: 'A',
        templateUrl: 'template/photoAlbum.html',
        link: function ($scope, element) {
            $scope.myInterval = 2000;
            element.css({
                margin: '0 auto'
            });
        }
    };
});