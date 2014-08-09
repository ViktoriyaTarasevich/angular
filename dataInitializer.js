'use strict';
var jsonData = [
    {
        'picture': 'http://placehold.it/250x250',
        'tag': 'aute',
        'photos' : ['http://placehold.it/250x250', 'http://placehold.it/250x250', 'http://placehold.it/250x250']
    },
    {
        'picture': 'http://placehold.it/250x250',
        'tag': 'ad',
        'photos' : ['http://placehold.it/250x250']
    },
    {
        'picture': 'http://placehold.it/250x250',
        'tag': 'ut',
        'photos' : ['http://placehold.it/250x250', 'http://placehold.it/250x250', 'http://placehold.it/250x250']
    },
    {
        'picture': 'http://placehold.it/250x250',
        'tag': 'ex',
        'photos' : ['http://placehold.it/250x250']
    },
    {
        'picture': 'http://placehold.it/250x250',
        'tag': 'nisi',
        'photos' : ['http://placehold.it/250x250', 'http://placehold.it/250x250']
    },
    {
        'picture': 'http://placehold.it/250x250',
        'tag': 'nulla',
        'photos' : ['http://placehold.it/250x250', 'http://placehold.it/250x250', 'http://placehold.it/250x250',
            'http://placehold.it/250x250','http://placehold.it/250x250']
    }
];

if(typeof localStorage.albums === 'undefined') {
    localStorage.setItem('albums', JSON.stringify(jsonData));
}