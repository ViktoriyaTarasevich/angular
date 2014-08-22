app.controller('NewAlbumController', function ($scope,$location,albumsStorage,$state) {
    $scope.add = function(album){
        albumsStorage.setData(album);
        $state.go('albums')
    }});
