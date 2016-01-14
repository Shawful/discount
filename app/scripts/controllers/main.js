'use strict';

/**
 * @ngdoc function
 * @name discountApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the discountApp
 */
angular.module('discountApp')
  .controller('MainCtrl', [ 'myDiscount', '$scope', '$timeout', function (myDiscount, $scope, $timeout) {
   
    // Get variables from service
    $scope.prices = myDiscount.getPrices();
    $scope.discount = myDiscount.getDiscount();

    // Set new discount after 5 seconds
    $timeout(function () {
    	myDiscount.setDiscount(1);
    	$scope.discount = myDiscount.getDiscount();
    	$scope.prices = myDiscount.getPrices();
    }, 2000);

  }]);
