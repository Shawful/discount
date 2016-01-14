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
   
  	// Initialize variables
    $scope.discount = .75;
    $scope.prices = {
    	standard: {
    		base: 6,
    		discount: 3,
    		endpoint: "REGULAR_STD"
    	},
    	pro: {
    		base: 10,
    		discount: 5,
    		endpoint: "REGULAR_PRO"
    	},
    	business: {
    		base: 14,
    		discount: 7,
    		endpoint: "REGULAR_BUS"
    	}
    }

    // Get variables from service
    $scope.discount = myDiscount.getDiscount();
    
    // Set new discount after 5 seconds
    $timeout(function () {
    	myDiscount.setDiscount(1);
    	$scope.discount = myDiscount.getDiscount()
    }, 5000);

    function getSrv(name, element) {
    	element = element || '*[ng-app]';
    	return angular.element(element).injector().get(name);
    }

  }]);
