# Discount Repo
Sets the discount in multiple places on a SPA and allows a user to manipulate the UI through the console.

#Getting Started
1) Clone the repo<br>
2) run <code>npm install</code> from command prompt in local repo folder<br>
3) run <code>bower install</code> from command prompt in local repo folder<br>
4) run <code>grunt serve</code> like two previous commands; serves a local instance of app on [localhost:9000/#/](http://localhost:9000/#/)<br>
<hr>
Initially, the SPA (single page application) shows a 50% discount.  After two seconds, the discount goes away, effectively changing the discount to 100% (no discount).  <br><br>
To programmatically change the discount back to 50% throught the browser's console, follow the directions below:<br>
<hr>
Console Commands:<br>
<code>x = getSrv('myDiscount')</code><br>
<code>$scope = getScope()</code><br>
<code>**$scope.$apply(function() { x.setDiscount(*.5*); })**</code>

To modify the discount repeatedly, simply repeat the *last line of console code* with a new discount value.  You may use the up arrow on your keyboard to pull up the last command sent in the console.  
<br>
The first two console commands must be typed to get access to the service which maintains the state of our discounts and our $scope, which stores our model.  If you accidentally press F5 or refresh the page in your browser, you will have to reenter all of the console commands to modify the discount across the page from the browser's console.
