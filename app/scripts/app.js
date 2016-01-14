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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function getSrv(name) {
      return angular.element(document.body).injector().get(name);
    }

function getScope() {
  var scope = angular.element(document.body).scope();
  return scope;
}