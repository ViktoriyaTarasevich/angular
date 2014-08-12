app.filter('albumTitle', function(){
    'use strict';
    return function(items, query){
        var arrayToReturn = [];
        if(typeof query === 'undefined' || query === ''){
            return items;
        }

        if (typeof items !== 'undefined'){
            for (var i=0; i<items.length; i++){
                if (items[i].tag.indexOf(query) > -1) {
                    arrayToReturn.push(items[i]);
                }
            }
        }
        return arrayToReturn;
    };
});