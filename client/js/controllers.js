var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', '$location','$rootScope', function($scope, $location, $rootScope) {
    $scope.loadTweeter = function() {
        var userLogName = $scope.userText;
        $rootScope.userMan = userLogName;
        
        if ($scope.userText == null || $scope.userText == '') {
            alert('You must enter a username!');
        }
        else {
            $location.path('/tweeter');
        }
    }
}]);

controllers.controller('tweeterController', ['$scope', '$http','$rootScope', function($scope, $http, $rootScope) {

    $scope.getData = function() {
        $http({
            method: 'GET',
            url: 'messages'
        }).success(function(data) {
            $scope.tweets = data;
            data.reverse();
        })
    }

    $scope.postData = function() {

        var tweetToPost = {
            text: $scope.newTweet,
            user: $rootScope.userMan
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
