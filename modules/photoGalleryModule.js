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
        });
});