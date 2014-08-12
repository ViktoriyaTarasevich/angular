app.controller('AlbumsController', function($scope, albumsStorage){
    $scope.albums = albumsStorage.getData();
});