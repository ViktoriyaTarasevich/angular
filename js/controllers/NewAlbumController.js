app.controller('AlbumController', function ($scope,$location,albumsStorage) {
    $scope.add = function(album){
        albumsStorage.setData(album);
        $location.path('/albums');
    };
});
