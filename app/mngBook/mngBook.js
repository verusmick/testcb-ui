'use strict';

angular.module('myApp.mngBook', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mngBook/:id', {
      templateUrl: 'mngBook/mngBook.html',
      controller: 'MngBookCtrl',
      controllerAs: 'vm'
    });
  }])

  .controller('MngBookCtrl', ['MngBooksService', '$routeParams', '$location', function (MngBooksService, $routeParams, $location) {
    var vm = this;
    vm.authorsList = [];
    vm.editFlagBook = false;
    vm.book = {
      title: '',
      editionDateTime: '',
      editionDate: '',
      authors: []
    };

    vm.createBook = createBook;
    vm.updateBook = updateBook;
    vm.goListBooks = goListBooks;


    ////
    initialize();

    function createBook() {
      vm.book['authors'] = setAuthorsList();
      vm.book.editionDate = vm.book.editionDateTime.toISOString().split("T")[0];
      MngBooksService.createBooks(vm.book).then(function (response) {
        vm.goListBooks();
      });
    }

    function updateBook() {
      vm.book['authors'] = setAuthorsList();
      vm.book.editionDate = vm.book.editionDateTime.toISOString().split("T")[0];
      MngBooksService.updateBookById(vm.book).then(function (response) {
        vm.goListBooks();
      });
    }

    function setAuthorsList() {
      var authorsListSelected = []
      vm.authorsList.forEach(function (author) {
        if (author.selected) {
          authorsListSelected.push(author.author_id);
        }
      });
      return authorsListSelected;
    }

    function setEditData(obj) {
      obj.authors.forEach(function (authorId) {
        vm.authorsList.forEach(function (author) {
          if (author.author_id === authorId) {
            author.selected = true;
          }
        })
      })
      var dateParts = obj.edition_date.split("-");
      return {
        bookId: obj.book_id,
        title: obj.title,
        editionDateTime: new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2)),
        editionDate: obj.editionDate,
        authors: []
      };
    }


    function goListBooks() {
      $location.path("/books");
    }

    function initialize() {
      vm.editFlagBook = $routeParams.id !== 'new';
      MngBooksService.getAuthors().then(function (response) {
        vm.authorsList = response;
        if (vm.editFlagBook) {
          MngBooksService.getBookById($routeParams.id).then(function (response) {
            vm.book = setEditData(response.data);
          });
        }
      });
    }
  }]);