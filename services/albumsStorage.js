app.factory('albumsStorage',function($q, $timeout){
    'use strict';
    return {
        getData: function() {
            var deferred = $q.defer();
            $timeout(function(){
                deferred.resolve();
            },500);
            return JSON.parse(localStorage.getItem('albums'));
        }
    };
});