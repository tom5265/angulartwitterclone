var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'welcomeController'
        })
        .when('/tweeter', {
            templateUrl: 'views/tweets.html',
            controller: 'tweeterController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
