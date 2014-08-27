app.directive('photoAlbum',function () {
    'use strict';
    return {
        restrict :'A',
        template:
            '<div style="height: 700px">'+
        '<carousel interval="myInterval" >'+
            '<slide ng-repeat="image in album.photos" active="image.active">'+
                '<a href="#/picture/{{album.tag}}/{{image.name}}"><img ng-src ="{{image.picture}}" style ="margin:auto;"/>'+
                    '<div class="carousel-caption">'+
                        '<p>{{image.name}}</p>'+
                    '</div>'+
                '</slide>'+
            '</carousel>'+
        '</div>'
    };
});