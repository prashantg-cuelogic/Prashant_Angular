'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
.directive('viewHeader', function() {
  	return {
  		templateUrl: 'partials/header.html',
  	}
  })
.directive('viewFooter', function() {
  	return {
  		templateUrl: 'partials/footer.html',
  	}
  });
