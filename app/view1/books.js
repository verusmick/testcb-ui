'use strict';

angular.module('myApp.books', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/books', {
      templateUrl: 'view1/books.html',
      controller: 'BooksCtrl',
      controllerAs: 'vm'
    });
  }])

  .controller('BooksCtrl', ['BooksService', function (BooksService) {
    var vm = this;
    vm.booksList = [];
    vm.messaje = 'test';

    initialize();

    function initialize() {
      BooksService.getBooks().then(function (response) {
        vm.booksList = response.data;
      });
    }
  }]);