//app.controller('CustomerFormController', function($scope) {
angular.module("DemoNG").controller('CustomerFormController', function($scope) {
	$scope.customer = new Customer();
	$scope.addCustomer = function() {
		console.log($scope.customer);
		workingCustomer = $scope.customer;
		//$(document).trigger("CustomerAddedEvent", $scope.customer);
		// Tell my parent scope (container) that I've added a customer
		// Make a (deep) copy first (src, dest)
		var custData = {};
		angular.copy($scope.customer, custData);
		
		// (or extend (dest, src1, src2, src3) - shallow copy of multiple source objects
		//angular.extend(custData, $scope.customer);
		
		$scope.$emit("CustomerAddedEvent", custData);
		//Go up to the top-most scope and broadcast down.
		//$rootScope.$broadcast("CustomerAddedEvent", $scope.customer);
	};
});

