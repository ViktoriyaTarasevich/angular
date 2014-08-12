app.factory('storageInitializer',function($http) {
    'use strict';
    return{
        initializeData : function(){
            if (typeof localStorage.albums !== 'undefined')
            {

                $http.get("json/albums.json")
                    .success(function (data) {
                        localStorage.setItem('albums', JSON.stringify(data))

                    })
                    .then(function (data) {
                        return JSON.stringify(data)
                    })
            }
        }
    }
});