app.factory('storageInitializer', function ($http, $q) {
    'use strict';
    return{
        initializeData: function () {
            return $http.get("albums.json")
                .success(function (data) {
                    localStorage.setItem('albums', JSON.stringify(data));
                })
                .then(function (data) {
                    return JSON.stringify(data);
                });
        }
    };
});