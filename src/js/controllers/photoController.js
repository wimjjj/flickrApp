/**
 * Created by Wim on 19-4-2016.
 */
var app = angular.module('flicker');

app.controller('photoController', function($scope, $routeParams){
    if(typeof($routeParams.photoId) == 'number' || $routeParams.photoId % 1 == 0){
        $scope.id = $routeParams.photoId;
    }
    else {
        $scope.error = "ID isn't valid";
    }
});