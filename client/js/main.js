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

// function getData() {
//     $http({
//         method: 'GET',
//         url: 'messages',
//     }).then(function(data) {
//         var tweets = data.split('\n');
//         console.log(tweets);
//         for (var i = 0; i < tweets.length; i++) {
//             var tweet = JSON.parse(tweets[i]);
//             var twit = tweet.text;
//             var screenName = tweet.userName;
//             $('#tweet_list').prepend('<li>' + screenName + ': ' + twit + '</li>');
//         }
//     }).done(function() {
//         allTweets.push(tweet);
//         console.log(allTweets);
//     })
// }

// function postData(tweet, user) {
//         var message = {};
//         message.text = tweet;
//         message.userName = user;
//         $http({
//             method: 'POST',
//             url: 'messages',
//             data: JSON.stringify(message)
//         }).done(function() {
//             $('#tweet_list').prepend('<li>' + message.userName + ': ' + message.text + '</li>');
//             clearForm();
//         })}