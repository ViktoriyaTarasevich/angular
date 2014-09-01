var app = angular.module('photoGallery', ['ui.router', 'ui.bootstrap']);
app.run(function ($rootScope) {
    'use strict';
    $rootScope.title = 'PhotoGallery';
});

app.config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise('/albums');
    $stateProvider
        .state('albums', {
            url: '/albums',
            templateUrl: './index.html',
            controller: 'AlbumsController'
        })
        .state('newAlbum', {
            url: '/newAlbum',
            templateUrl: './template/newAlbum.html',
            controller: 'NewAlbumController'
        })
        .state('album', {
            url: '/album/{albumTitle}',
            templateUrl: './template/album.html',
            controller: 'AlbumController'
        })
        .state('picture', {
            url: '/picture/{albumTitle}/{pictureTitle}',
            templateUrl: './template/picture.html',
            controller: 'PictureController'
        });
});