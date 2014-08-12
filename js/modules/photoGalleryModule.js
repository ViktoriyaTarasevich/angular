var app = angular.module('photoGallery', ['ui.router','ui.bootstrap']);
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

            controller : function($scope, albumsStorage,storageInitializer){
                if (localStorage.albums){
                    $scope.albums = albumsStorage.getData();
                }
                else{
                    storageInitializer.initializeData();
                }
                $scope.delete = function(album) {
                    albumsStorage.deleteData(album);
                };

            }
        })
        .state('newAlbum', {
            url: '/newAlbum',
            templateUrl: './template/newAlbum.html',
            controller: function ($scope,$location,albumsStorage) {
                $scope.add = function(album){
                    albumsStorage.setData(album);
                    $location.path('/albums');
                };
            }

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
                $scope.myInterval = 2000;
                $scope.add = function(photo){
                    photoStorage.addPhoto(albumTitle,photo);

                };
            }
        })
        .state('picture',{
            url: '/picture/{albumTitle}/{pictureTitle}',
            templateUrl: './template/picture.html',
            controller : 'PictureController'
        });

});