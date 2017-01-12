// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/register.html',
            controller  : 'mainController'
        })

        // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

    // route for the contact page
    .when('/complete', {
        templateUrl : 'pages/complete.html',
        controller  : 'completeController'
    });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = '';
});

myApp.controller('aboutController', function($scope) {
    $scope.message = 'Great! You did it!';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Complete the puzzle';
});

myApp.controller('completeController', function($scope) {
    $scope.message = 'Well Done!! You have completed testing the App! Thank you for your help :)';
});
