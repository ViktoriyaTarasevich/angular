app.factory('albumsStorage',function($q, $timeout){
    'use strict';
    return {
        getData: function() {
            var deferred = $q.defer();
            $timeout(function(){
                deferred.resolve(JSON.parse(localStorage.getItem('albums')));
            },100);
            return deferred.promise;
        },
        getDataByTitle : function(title){
            var data = JSON.parse(localStorage.getItem('albums'));
            for(var i = 0; i < data.length; i++){
                if(data[i].tag === title) {
                    return data[i];
                }
            }
        },
        setData: function(album){
            var deferred = $q.defer();
            $timeout(function(){

                if(typeof localStorage !== 'undefined') {
                    var tempStorage = JSON.parse(localStorage.albums);
                    album.photos = [];
                    tempStorage.push(album);
                    localStorage.albums = JSON.stringify(tempStorage);
                    deferred.resolve();
                }
            },100);
            return deferred.promise;
        },
        updateData : function(album){
            if (typeof localStorage !== 'undefined') {
                var tempStorage = JSON.parse(localStorage.albums);
                for (var i = 0; i < tempStorage.length; i++) {
                    if (tempStorage[i].tag === album.tag) {
                        tempStorage[i] = album;
                    }
                }
                localStorage.albums = JSON.stringify(tempStorage);
            }
        },
        searchExistData : function(album){
            var tempStorage = JSON.parse(localStorage.albums);
            var item = album.tag;
            if (typeof item !== 'undefined'){
                for (var i=0; i<tempStorage.length; i++){
                    if (tempStorage[i].tag === item) {
                        return false;
                    }
                }
            }
            return true;

        },
        deleteData : function(album){
            var deferred = $q.defer();
            $timeout(function(){
                var tempStorage = JSON.parse(localStorage.albums);
                for (var i=0; i<tempStorage.length; i++){
                    if (tempStorage[i].tag === album.tag){
                        tempStorage.splice(i, 1);
                    }
                }
                localStorage.albums = JSON.stringify(tempStorage);
                deferred.resolve();
            },100);
            return deferred.promise;

        }

    };
});
