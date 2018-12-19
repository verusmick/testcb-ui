'use strict';

angular.module('myApp.books', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/books', {
    templateUrl: 'view1/books.html',
    controller: 'BooksCtrl',
    controllerAs: 'vm'
  });
}])

.controller('BooksCtrl', [function() {
  console.log('BooksCtrl');
  var vm = this;
  vm.messaje = 'test';

}]);