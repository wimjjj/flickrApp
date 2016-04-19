var app = angular.module('flicker', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/tag/:tag', {
        templateUrl: 'src/html/tag.html',
        controller: 'tagController'
    }).when('/photo/:photoId', {
        templateUrl: 'src/html/photo.html',
        controller: 'photoController'
    }).otherwise({
        redirectTo: '/tag/hello'
    });
});

