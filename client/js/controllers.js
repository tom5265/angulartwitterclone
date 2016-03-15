var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', function($scope) {
    $scope.hello = 'Hello World!';
    $scope.weather = "It's sunny and 85 degrees outside!";
}]);

