app.controller('AlbumController', function($scope,albumsStorage,photoStorage,$stateParams) {
    'use strict';
    var albumTitle = $stateParams.albumTitle;
    $scope.album = albumsStorage.getDataByTitle(albumTitle);
    $scope.add = function(photo){
        photoStorage.addPhoto(albumTitle,photo);
    };
});