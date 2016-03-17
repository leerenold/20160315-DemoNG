angular.module("DemoNG").controller('CustomerTableController', function($rootScope, $scope, CustomerLocalStorageService, CustomerRESTStorageService) {
		// Do customers belong to the table or to the app?
		// If they belong to the app, make them a service, otherwise scope them here:
		//$scope.customers = [];
		
		$scope.workingCustomer = new Customer();
		
		//$scope.customers = CustomerLocalStorageService.getCustomers(); // access the global variable (ick)
		$scope.customers = [];
		
		//CustomerRESTStorageService.getCustomers();
		
		$scope.resetCustomers = function() {
			CustomerRESTStorageService.getCustomers().then(
				function(custs) {
					$scope.customers = custs;
				}, function(error) {
					console.log("Error getting customerss: " + error.data);
					console.log(error);
				}	
			);
		}

		// reset customers on controller load/instantiation
		$scope.resetCustomers();
			
		// The asynchronous CustomerRESTStorageService (and others) will 
		// fire a CustomersRetrievedEvent when customer data has been retrieved.
//		$rootScope.$on("CustomersRetrievedEvent", function(evt, custs) {
//			$scope.customers = custs;
//		});
		
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
//			for (var i in $scope.customers) {
//				var cust = $scope.customers[i];
//				if (cust.customerId == $scope.workingCustomer.customerId) {
//					angular.extend(cust, $scope.workingCustomer);
//					$scope.workingCustomer = new Customer();
//					return;
//				}
//			}
			CustomerRESTStorageService.updateCustomer($scope.workingCustomer)
			.then(function(cust) {
				$scope.resetCustomers();
			}, function(error) {
				console.log("Failed to update: ");
				console.log(error);
			});
			$scope.workingCustomer = new Customer();
		}
		
		$scope.deleteWorkingCustomer = function() { // TODO-CV Replace with UnderScore/Lodash
			CustomerRESTStorageService.deleteCustomer($scope.workingCustomer)
			.then(function(cust) {
				$scope.resetCustomers();
			}, function(error) {
				console.log("Failed to delete: ");
				console.log(error);
			});
			$scope.workingCustomer = new Customer();
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