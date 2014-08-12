var app = angular.module('photoGallery', ['ui.router']);
app.run(function($rootScope){
    'use strict';
    $rootScope.title = 'PhotoGallery';
});

app.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise('/albums');
    $stateProvider
        .state('albums', {
            url : '/albums',
            templateUrl : './mainPage.html',

            controller : function($scope, albumsStorage){
                $scope.albums = albumsStorage.getData();
            }
        })
        .state('newAlbum', {
            url: '/newAlbum',
            templateUrl: './template/newAlbum.html',
            controller: 'NewAlbumController'

        })
        .state('album',{
            url: '/album/{albumTitle}',
            templateUrl : './template/album.html',
            resolve:{
                albumTitle: ['$stateParams', function($stateParams){
                    return $stateParams.albumTitle;
                }]
            },
            controller: function($scope,$location,albumTitle,albumsStorage,photoStorage){
                var currentAlbum  = albumsStorage.getDataByTitle(albumTitle);
                $scope.album = currentAlbum;
                $scope.add = function(photo){
                    photoStorage.addPhoto(albumTitle,photo);
                    $location.path('/albums');
                };
            }
        })
        .state('picture',{
            url: '/picture/{albumTitle}/{pictureTitle}',
            templateUrl: './template/picture.html',
            controller : 'PictureController'
        });
});