var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomePageController'
    })
    .when('/instructors', {
        templateUrl: 'views/instructors.html',
        controller: 'InstructorPageController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);