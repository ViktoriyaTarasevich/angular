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