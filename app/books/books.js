'use strict';

angular.module('myApp.books', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/books', {
      templateUrl: 'books/books.html',
      controller: 'BooksCtrl',
      controllerAs: 'vm'
    });
  }])

  .controller('BooksCtrl', ['BooksService', function (BooksService) {
    var vm = this;
    vm.booksList = [];
    vm.messaje = 'test';
    vm.searchAutores = '';
    vm.editionFilter = '';

    vm.arrayToString = arrayToString;

    initialize();

    function arrayToString(string) {
      return string.join(", ");
    }

    function initialize() {
      BooksService.getBooks().then(function (response) {
        vm.booksList = response.data;
      });
    }
  }]);