app.controller('PictureController', function($scope,photoStorage,$stateParams){
    'use strict';
    var albumTitle = $stateParams.albumTitle;
    var pictureTitle = $stateParams.pictureTitle;
    $scope.image = photoStorage.getPhotoByTitle(albumTitle,pictureTitle);
    $scope.addCommentary = function(commentary){
        photoStorage.addCommentaryToPhoto(albumTitle,pictureTitle,commentary);
        $scope.image = photoStorage.getPhotoByTitle(albumTitle,pictureTitle);
        $scope.commentary= '';
    };
});