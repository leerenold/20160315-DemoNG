//app.controller('CustomerFormController', function($scope) {
angular.module("DemoNG").controller('CustomerFormController', function($scope, CustomerRESTStorageService) {
	$scope.customer = new Customer();
	$scope.addCustomer = function() {
//		console.log($scope.customer);
//		workingCustomer = $scope.customer;
		//$(document).trigger("CustomerAddedEvent", $scope.customer);
		// Tell my parent scope (container) that I've added a customer
		// Make a (deep) copy first (src, dest)
		var custData = {};
		angular.copy($scope.customer, custData);
		
		// (or extend (dest, src1, src2, src3) - shallow copy of multiple source objects
		//angular.extend(custData, $scope.customer);
		
		// $emit up to our parent scope
		$scope.$emit("CustomerAddedEvent", custData);
		//Go up to the top-most scope and broadcast down.
		//$rootScope.$broadcast("CustomerAddedEvent", $scope.customer);
	};
	$scope.findCustomerById = function() {
		CustomerRESTStorageService.getCustomerById($scope.customer.customerId)
		.then(function(cust) {
			$scope.customer = cust;
		}, function(error) {
			console.log("Failed to find customer by id: ");
			console.log(error);
		});
		// May need to induce a delay here if the REST request comes back to fast
		// Or just comment it out...
		$scope.customer = new Customer();
	}
	$scope.findCustomerByLastName = function() {
		CustomerRESTStorageService.getCustomersByLastName($scope.customer.lastName)
		.then(function(cust) {
			// include CustomerTable dynamically, populating it with found results
			$scope.customer = cust;
		}, function(error) {
			console.log("Failed to find customers by lastName: ");
			console.log(error);
		});
		// May need to induce a delay here if the REST request comes back to fast
		// Or just comment it out...
		$scope.customer = new Customer();
	}
	
	$scope.clearForm = function() {
		$scope.customer = new Customer();
	}
});

