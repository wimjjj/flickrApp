/**
 * Created by Wim on 19-4-2016.
 */
var app = angular.module("flicker");

app.controller("tagController", function ($scope, $routeParams, $http) {
    $scope.tag = $routeParams.tag;
    $scope.amount = 10;

    var url = 'src/api/tag/' + $scope.tag + '/' + $scope.amount;

    $http.get(url).then(function(response){
        $scope.photos = response.data;
    }).catch(function(e){
        $scope.error = e;
    });
});
