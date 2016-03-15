angular.module("DemoNG", []);

var workingCustomer;

angular.module("DemoNG").controller('CustomerFormController', function($scope) {
	$scope.customer = new Customer();
	$scope.addCustomer = function() {
		console.log($scope.customer);
		workingCustomer = $scope.customer;
	}
});