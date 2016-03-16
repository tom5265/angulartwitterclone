var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', function($scope) {

}]);

controllers.controller('tweeterController', ['$scope', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/messages'
    }).then(function(data) {
        $scope.tweets = data;
    }
        )
}]);
