app.controller('AlbumsController', function($scope, albumsStorage,storageInitializer){
    if (localStorage.albums){
        var promise = albumsStorage.getData();
        promise.then(function(result) {
            $scope.albums = result;
        });
    }
    else{
        var initialDataPromise = storageInitializer.initializeData();
        initialDataPromise.then(function(result){
            var promise = albumsStorage.getData();
            promise.then(function(result) {
                $scope.albums = result;
            });
        });
    }
    $scope.delete = function(album) {
        albumsStorage.deleteData(album);
        var promise = albumsStorage.getData();
        promise.then(function(result) {
            $scope.albums = result;
        });
    };

});