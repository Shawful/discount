angular.module('discountApp')
  .factory('myDiscount', function () {
  	var discount = .5;

  	return {
  		getDiscount: function () {
  			return discount;
  		},
  		setDiscount: function (newDiscount) {
  			discount = newDiscount;
  			console.log(discount);
  		}
  	}
  });