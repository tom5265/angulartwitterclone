var controllers = angular.module('myApp.controllers', []);
controllers.controller('welcomeController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Hello World!';
    $scope.weather = "It's sunny and 85 degrees outside!";
}]);

controllers.controller('tweeterController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Hello World!';
    $scope.weather = "It's sunny and 85 degrees outside!";
}]);