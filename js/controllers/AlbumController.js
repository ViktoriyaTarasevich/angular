app.controller('AlbumController', function($scope,$location,albumsStorage,photoStorage,$stateParams){
    var currentAlbum  = albumsStorage.getDataByTitle($stateParams.albumTitle);
    $scope.album = currentAlbum;
    $scope.myInterval = 2000;
    $scope.add = function(photo){
        photoStorage.addPhoto($stateParams.albumTitle,photo);
        $scope.album = albumsStorage.getDataByTitle($stateParams.albumTitle);
        $scope.photo = '';

    };
});