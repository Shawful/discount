# Discount Repo
Sets the discount in multiple places on a SPA.

#Getting Started
Console Commands:<br>
<code>x = getSrv('myDiscount')</code><br>
<code>$scope = getScope()</code><br>
<code>$scope.$apply(function() { x.setDiscount(.5);})</code>

To modify the discount repeatedly, simply repeat the last line of code with a new discount.  You may use the up arrow on your keyboard to pull up the last command sent in the console.  The first two commands must be typed to get access to the service which maintains the state of our discounts and our $scope, which stores our model.
