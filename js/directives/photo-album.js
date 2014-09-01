app.directive('photoAlbum', function () {
    'use strict';
    return {
        restrict: 'A',
        templateUrl: 'template/photoAlbum.html',
        link: function ($scope) {
            $scope.myInterval = 2000;
        }
    };
});