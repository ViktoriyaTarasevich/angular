app.controller('AlbumController', function($scope,$location,albumTitle,albumsStorage,photoStorage){
    var currentAlbum  = albumsStorage.getDataByTitle(albumTitle);
    $scope.album = currentAlbum;
    $scope.myInterval = 2000;
    $scope.add = function(photo){
        photoStorage.addPhoto(albumTitle,photo);
        $scope.album = albumsStorage.getDataByTitle(albumTitle);
        $scope.photo = '';

    };
});