'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('HelloWorld', ['$scope', function($scope) {

  }])
  .controller('Menu', ['$scope', function($scope) {
		$scope.menus= [{name:'Home',lurl:'/'},{name:'About Us',lurl:'/aboutus'},{name:'Clients',lurl:'clients'},{name:'Careers',lurl:'careers'}];	
  }]);
