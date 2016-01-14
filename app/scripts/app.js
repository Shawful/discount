'use strict';

/**
 * @ngdoc overview
 * @name discountApp
 * @description
 * # discountApp
 *
 * Main module of the application.
 */
angular
  .module('discountApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// return access to a service by name
function getSrv(name) {
  return angular.element(document.body).injector().get(name);
}

// return access to the $scope for ng-app
function getScope() {
  var scope = angular.element(document.body).scope();
  return scope;
}