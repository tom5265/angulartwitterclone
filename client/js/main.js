var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'controllers/welcomeController.js'
    })
    .when('/tweeter', {
        templateUrl: 'views/tweets.html',
        controller: 'controllers/tweeterController.js'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);