app.directive('photoAlbum',function () {
    'use strict';
    return {
        restrict :'A',
        template: '<ul>'+
            '<li ng-repeat="image in album.photos">'+
                '<img src ="{{image.picture}}"/>'+
                '<a href="#/picture/{{album.tag}}/{{image.name}}">{{image.name}}</a>'+
            '</li>'+
        '</ul>'
    };
});