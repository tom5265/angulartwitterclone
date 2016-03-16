var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope','$location', function($scope, $location) {
    $scope.userText;
    $scope.loadTweeter = function (userText) {
        if (userText == null || userText == '') {
            alert('You must enter a username!');
        }
        else {
            $location.path('/tweeter');
        }
    }
}]);

controllers.controller('tweeterController', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'messages'
    }).success(function(data) {
        $scope.tweets = data;
    }
        )
    // $scope.postData = function (tweet, user) {
    //     var message = {};
    //     message.text = tweet;
    //     message.userName = user;
    //     $.http({
    //         method: 'POST',
    //         url: 'messages',
    //     }).success(function(data) {
    //         $scope.tweets = data;
            
    //     })
    // }
    

}]);
