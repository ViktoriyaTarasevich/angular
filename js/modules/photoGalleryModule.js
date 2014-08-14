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
                albumTitle: function($stateParams){
                    return $stateParams.albumTitle;
                }
            },
            controller: function($scope,$location,albumTitle,albumsStorage,photoStorage){
                var currentAlbum  = albumsStorage.getDataByTitle(albumTitle);
                $scope.album = currentAlbum;
                $scope.myInterval = 2000;
                $scope.add = function(photo){
                    photoStorage.addPhoto(albumTitle,photo);
                    $scope.album = albumsStorage.getDataByTitle(albumTitle);
                    $scope.photo = '';

                };
            }
        })
        .state('picture',{
            url: '/picture/{albumTitle}/{pictureTitle}',
            templateUrl: './template/picture.html',
            controller : 'PictureController'
        });

});