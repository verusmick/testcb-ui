'use strict';

angular.module('myApp.books')

  .factory('MngBooksService', ['API_ENDPOINT', '$http', function (API_ENDPOINT, $http) {

    return {
      createBooks: createBooks,
      getAuthors:getAuthors
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
  }]);