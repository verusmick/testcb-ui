'use strict';

describe('myApp.books module', function() {

  beforeEach(module('myApp.books'));

  describe('books controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('BooksCtrl');
      expect(view1Ctrl).toBeDefined();


    }));

  });
});