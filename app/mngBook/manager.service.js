'use strict';

angular.module('myApp.books')

  .factory('MngBooksService', ['API_ENDPOINT', '$http', function (API_ENDPOINT, $http) {

    return {
      createBooks: createBooks,
      getAuthors:getAuthors,
      getBookById:getBookById,
      updateBookById:updateBookById
    };

    function createBooks(obj) {
      return $http.post(API_ENDPOINT + '/books', obj).then(function (response) {
        return response.data;
      });
    }

    function getAuthors(){
      return $http.get(API_ENDPOINT + '/authors').then(function (response) {
        return response.data;
      });
    }

    function getBookById(bookId){
      return $http.get(API_ENDPOINT + '/books/'+bookId).then(function (response) {
        return response.data;
      });
    }

    function updateBookById(obj){
      return $http.put(API_ENDPOINT + '/books/'+obj.bookId, obj).then(function (response) {
        return response.data;
      });
    }
  }]);