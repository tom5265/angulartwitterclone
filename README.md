### Instructions

The objective of this project is to convert the mock twitter into an Angular application.

#### Further Reading
Angular [docs](https://docs.angularjs.org/api/ng)
Angular usage [examples](https://github.com/curran/screencasts/tree/gh-pages/introToAngular)

### Basic Req's
Utilize Angular's built in functionality to simplify your client side code. Consult the angular [docs](https://docs.angularjs.org/guide/introduction)
Note: During this project, always choose to code using angular templating instead of using plain javascript and html. Review Dependency Injection, '$location','$scope', $resource', 'ngResource', 'ngRoute', '$routeProvider', '$http', '$rootScope' as they may be needed

##### client
* html - Style your application .
	* index.html - The following compenents are included as [cdns](https://en.wikipedia.org/wiki/Content_delivery_network) in the html page: jquery, bootstrap (css and js), angular, angular-route, angular-resource and momentjs. Make edits if needed to customize but index.html has been implemented already. Take time to view the structure and note ng-view. This is where the other view templates will injected.
	* Complete tweets.html and welcome.html
	* welcome should be the landing page and allow the user to input a username. The username will be bound to the global [$scope](https://docs.angularjs.org/guide/scope) (root scope) and navigate to the tweets view once entered.
	* tweets should display a list of tweets using ng-repeat. This list should show all tweets regardless of their username.
* main.js - angular to handle the behavior on the client side of the application
	* postData:
		* create a `$http` request to post a new tweet
		* each message should be an object with `text` and `user` properties (may use default user). The server will add a `createdAt` property which represents the timestamp for when the tweet was created.
	* getData:
		* create a `$http` request to get all tweets from the backend.
	* Data will be returned from the service in the correct JSON format, so you shouldn't have to do any manual processing on your end. You will have access to a `createdAt` property that represents the timestamp of the tweet.
    * Use `ng-click` on the button in the html to hook up the submit button to the post function.

##### server
* server.js - (ALREADY IMPLEMENTED) server side code with [nodejs](https://nodejs.org/en/docs/)
	* Creates a server to handle GET/POST requests.

* data.json - json file containing tweets and where future tweets will be written.
	* [JSON](http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/)
    
    
# Running the project
* With terminal focused on the root of your project folder, run `nodemon`. Then visit your site at
```
http://localhost:3000
```