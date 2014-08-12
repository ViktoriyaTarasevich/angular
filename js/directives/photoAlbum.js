app.directive('photoAlbum',function () {
    'use strict';
    return {
        restrict :'A',
        template: '<ul>'+
            '<li ng-repeat="image in album.photos">'+
                '<a href="#/picture/{{album.tag}}/{{image.name}}"><img ng-src ="{{image.picture}}"/>'+
                '<h4>{{image.name}}</h4></a>'+
            '</li>'+
        '</ul>'
    };
});