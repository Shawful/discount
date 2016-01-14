'use strict';

/**
 * @ngdoc function
 * @name discountApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the discountApp
 */
angular.module('discountApp')
  .controller('MainCtrl', [ 'myDiscount', '$scope', '$timeout', '$rootScope',
  	function (myDiscount, $scope, $timeout, $rootScope) {
   
    // Get variables from service
    $scope.prices = myDiscount.getPrices();
    $scope.discount = myDiscount.getDiscount();

    // Set new discount after 5 seconds
    $timeout(function () {
    	myDiscount.setDiscount(1);
    	$scope.discount = myDiscount.getDiscount();
    	$scope.prices = myDiscount.getPrices();
    }, 2000);

    $rootScope.$on('discountChange', function(){
		$scope.discount = myDiscount.getDiscount();
    	$scope.prices = myDiscount.getPrices();
    });

  }]);
