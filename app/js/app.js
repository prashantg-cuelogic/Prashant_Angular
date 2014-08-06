'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/aboutus', {templateUrl: 'partials/aboutus.html', controller: 'Menu'});
  $routeProvider.when('/clients', {templateUrl: 'partials/clients.html', controller: 'Menu'});
  $routeProvider.when('/careers', {templateUrl: 'partials/careers.html', controller: 'Menu'});
  $routeProvider.when('/toc', {templateUrl: 'partials/toc.html', controller: 'Menu'});

  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'HelloWorld'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
