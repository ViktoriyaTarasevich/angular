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
        getDataByTitle : function(title){
            var data = JSON.parse(localStorage.getItem('albums'));
            for(var i = 0; i < data.length; i++){
                if(data[i].tag === title){
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
            },500);

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
        }

    };
});
