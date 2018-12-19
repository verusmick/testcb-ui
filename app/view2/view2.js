'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View2Ctrl', ['MngBooksService','$routeParams', function(MngBooksService,$routeParams) {
  var vm = this;
  vm.authorsList= [];
  vm.book ={
    title:'',
    editionDateTime:'',
    editionDate:'',
    authors:[]
  };

  vm.createBook = createBook;


  ////
  initialize();

  function createBook(){
    vm.book['authors'] = setAuthorsList();
    vm.book.editionDate = vm.book.editionDateTime.toISOString().split("T")[0];
    MngBooksService.createBooks(vm.book).then(function(response){

    });
  }

  function setAuthorsList(){
    var authorsListSelected =[]
    vm.authorsList.forEach(function(author){
      if(author.selected){
        authorsListSelected.push(author.author_id);
      }
    });
    return authorsListSelected;
  }

  function initialize() {
    MngBooksService.getAuthors().then(function(response){
      vm.authorsList = response;
    });
  }
}]);