'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.books',
  'myApp.mngBook',
  'myApp.version'
])
  .constant('API_ENDPOINT', 'http://localhost:3000')
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/books'});
  }]);
