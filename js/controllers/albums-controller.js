app.controller('AlbumsController', function ($scope, albumsStorage, storageInitializer) {
    'use strict';
    if (localStorage.albums) {
        albumsStorage.getData()
            .then(function (result) {
                $scope.albums = result;
            }
        );
    }
    else {
        var initialDataPromise = storageInitializer.initializeData();
        initialDataPromise.then(function (result) {
            albumsStorage.getData()
                .then(function (result) {
                    $scope.albums = result;
                }
            );
        });
    }
    $scope.delete = function (album) {
        albumsStorage.deleteData(album)
            .then(
            albumsStorage.getData()
                .then(function (result) {
                    $scope.albums = result;
                })
        );
    };

});