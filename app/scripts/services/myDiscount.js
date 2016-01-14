angular.module('discountApp')
  .factory('myDiscount', function () {
  	var discount = .5;
  	var prices = {
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
    };

  	return {
  		getPrices: function () {
  			return prices;
  		},
  		getDiscount: function() {
  			return discount;
  		},
  		setDiscount: function (newDiscount) {
  			discount = newDiscount;
  			prices.standard.discount = prices.standard.base*discount;
  			prices.pro.discount = prices.pro.base*discount;
  			prices.business.discount = prices.business.base*discount;
  			// businessconsole.log(discount);
  		}
  	}
  });