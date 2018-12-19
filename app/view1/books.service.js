'use strict';

angular.module('myApp.books')

  .factory('BooksService', ['API_ENDPOINT', '$http', function (API_ENDPOINT, $http) {

    return {
      getBooks: getBooks
    };

    function getBooks() {
      return $http({
        method: 'GET',
        url: API_ENDPOINT+'/books'
      }).then(function (response) {
        return response.data;
      });
    }
  }]);