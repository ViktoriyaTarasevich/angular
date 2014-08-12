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
            var deferred = $q.defer();
            $timeout(function() {
                if (typeof localStorage !== 'undefined') {
                    var tempStorage = JSON.parse(localStorage.albums);
                    for (var i = 0; i < tempStorage.length; i++) {
                        if (tempStorage[i].tag === album.tag) {
                            tempStorage[i] = album;
                        }
                    }
                    localStorage.albums = JSON.stringify(tempStorage);
                }
                deferred.resolve();
            },500);
        }

    };
});

app.factory('photoStorage',function(albumsStorage){
    'use strict';
    return{
        addPhoto: function(albumTitle,photo){
            var album = albumsStorage.getDataByTitle(albumTitle);
            photo.commentary = [];
            album.photos.push(photo);
            albumsStorage.updateData(album);
        },
        getPhotoByTitle:function(albumTitle,photoTitle){
            var album = albumsStorage.getDataByTitle(albumTitle);
            for (var i = 0; i < album.photos.length; i++){
                if (photoTitle === album.photos[i].name){
                    return album.photos[i];
                }
            }
        },
        addCommentaryToPhoto: function(albumTitle,photoTitle,commentary){
            var album = albumsStorage.getDataByTitle(albumTitle);
            for (var i = 0; i < album.photos.length; i++){
                if (photoTitle === album.photos[i].name){
                    album.photos[i].commentary.push(commentary);
                }
            }
            albumsStorage.updateData(album);

        }

    };
});