app.controller('NewAlbumController', function ($scope, $location, albumsStorage, $state) {
    'use strict';
    $scope.add = function (album) {
        albumsStorage.setData(album);
        $state.go('albums');
    };
});
