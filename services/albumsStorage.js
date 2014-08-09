app.factory('albumsStorage',function($q, $timeout){
    'use strict';
    return {
        getData: function() {
            var deferred = $q.defer();
            $timeout(function(){
                deferred.resolve();

            },500);
            return JSON.parse(localStorage.getItem('albums'));
        },
        setData: function(album){
            var deferred = $q.defer();
            $timeout(function(){

                if(typeof localStorage !== 'undefined') {
                    var tempStorage = JSON.parse(localStorage.albums);
                    tempStorage.push(album);
                    localStorage.albums = JSON.stringify(tempStorage);
                    deferred.resolve();
                }
            },500);
            album.pictures = [];

        }
    };
});