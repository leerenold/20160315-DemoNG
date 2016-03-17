angular.module("DemoNG").service('CustomerRESTStorageService', function($rootScope, $http, $q) {
	
	this.addCustomer = function(cust) {
	};
	
	this.getCustomers = function() {
		var deferred = $q.defer();
		 $http.get("http://localhost:8080/DemoNG/rest/customers")
		 	.then(function(response) { // Success - we got the data from the REST server
//		 		$rootScope.$broadcast("CustomersRetrievedEvent", response.data);
		 		deferred.resolve(response.data);
		 	}, function(error) { // Failure with the HTTP Request
//		 		$rootScope.$broadcast("CustomersRetrievalFailureEvent", error);
		 		deferred.reject(error);
		 	});
		 return deferred.promise;
	};
	
	this.getCustomerById = function(customerId) {
	};
	
	this.getCustomersByLastName = function(lastName) {
	};
	
	this.updateCustomer = function(cust) {
	};

	this.deleteCustomer = function(cust) {
	};

});