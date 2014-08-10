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
            resolve : {
                allAlbumsFromStorage:  function(albumsStorage){
                    return albumsStorage.getData();
                }},
            controller : function($scope, allAlbumsFromStorage){
                $scope.albums = allAlbumsFromStorage;
            }
        })
        .state('newAlbum', {
            url: '/newAlbum',
            templateUrl: './newAlbum.html',
            controller: function ($scope,$location,albumsStorage) {
                $scope.add = function(album){
                    albumsStorage.setData(album);
                    $location.path('/albums');
                };
            }
        })
        .state('album',{
            url: '/album/{albumTitle}',
            templateUrl : './album.html',
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
            templateUrl: './picture.html',
            resolve:{
                pictureTitle: ['$stateParams', function($stateParams){
                    return $stateParams.pictureTitle;
                }],
                albumTitle : ['$stateParams', function($stateParams){
                    return $stateParams.albumTitle;
                }]
            },
            controller : function($scope,albumTitle,pictureTitle,photoStorage){
                var i = photoStorage.getPhotoByTitle(albumTitle,pictureTitle);
                $scope.image = photoStorage.getPhotoByTitle(albumTitle,pictureTitle);

            }
        });
});