# Discount Repo
Sets the discount in multiple places on a SPA and allows a user to manipulate the UI through the console.

#Getting Started
1) Clone the repo<br>
2) run <code>npm install</code> from command prompt in local repo folder<br>
3) run <code>bower install</code> from command prompt in local repo folder<br>
4) run <code>grunt serve</code> like previous commands to serve a local instance of site on localhost:9000/#/<br>
<hr>

Console Commands:<br>
<code>x = getSrv('myDiscount')</code><br>
<code>$scope = getScope()</code><br>
<code>$scope.$apply(function() { x.setDiscount(.5);})</code>

To modify the discount repeatedly, simply repeat the last line of code with a new discount.  You may use the up arrow on your keyboard to pull up the last command sent in the console.  The first two console commands must be typed to get access to the service which maintains the state of our discounts and our $scope, which stores our model.
