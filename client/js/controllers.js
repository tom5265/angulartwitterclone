var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    $scope.loadTweeter = function() {
        if ($rootScope.userText == null || $rootScope.userText == '') {
            alert('You must enter a username!');
        }
        else {
            $location.path('/tweeter');
        }
    }
}]);

controllers.controller('tweeterController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

    $scope.getData = function() {
        $http({
            method: 'GET',
            url: 'messages'
        }).success(function(data) {
            $scope.tweets = data;
        })
    }

    $scope.postData = function() {

        var tweetToPost = {
            text: $scope.newTweet,
            user: 'anonymous'
        };
        $http({
            method: 'POST',
            url: 'messages',
            data: tweetToPost
        }).success(function () {           
            $scope.getData();
        })

    }
    $scope.getData();

}]);
