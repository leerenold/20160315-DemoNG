angular.module("DemoNG").controller('CustomerTableController', function($rootScope, $scope) {
		// Do customers belong to the table or to the app?
		// If they belong to the app, make them a service, otherwise scope them here:
		//$scope.customers = [];
		
		$scope.customers = $rootScope.customers; // access the global variable (ick)

});