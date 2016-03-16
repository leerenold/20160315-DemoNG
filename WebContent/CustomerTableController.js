angular.module("DemoNG").controller('CustomerTableController', function($rootScope, $scope) {
		// Do customers belong to the table or to the app?
		// If they belong to the app, make them a service, otherwise scope them here:
		//$scope.customers = [];
		
		$scope.workingCustomer = new Customer();
		
		$scope.customers = $rootScope.customers; // access the global variable (ick)
		
		$scope.keyPressed = function(obj, $event) { // TODO-CV Consider using directives instead
			switch ($event.keyCode) {
				case 83:
				case 115:
					if ($event.ctrlKey || $event.metaKey) {
						$scope.saveWorkingCustomer();
					}
					break;
				case 13:  // Enter was pressed
					$scope.saveWorkingCustomer();
					break;
				case 27:  // Escape was pressed - revert
					$scope.revertWorkingCustomer();
					break;
				default: // Ignore everything else
			}
		}
		
		$scope.saveWorkingCustomer = function() { // TODO-CV Replace with UnderScore/Lodash
			for (var i in $scope.customers) {
				var cust = $scope.customers[i];
				if (cust.customerId == $scope.workingCustomer.customerId) {
					angular.extend(cust, $scope.workingCustomer);
					$scope.workingCustomer = new Customer();
					return;
				}
			}
		}
		$scope.revertWorkingCustomer = function() {
			$scope.workingCustomer = new Customer();
		}
		
		$scope.hasCustomers = function() {
			return $scope.customers.length > 0;
		}
		
		$scope.isEditing = function(cust) {
			return cust.customerId == $scope.workingCustomer.customerId;
		}
		
		$scope.selectWorkingCustomer = function(cust) {
			angular.copy(cust, $scope.workingCustomer);
		};
});