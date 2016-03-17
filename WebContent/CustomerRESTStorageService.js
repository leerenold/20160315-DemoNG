angular.module("DemoNG").service('CustomerRESTStorageService', function($rootScope, $http, $q) {
	
	this.addCustomer = function(cust) {
		var deferred = $q.defer();
		 $http.post("http://localhost:8080/DemoNG/rest/customers", cust, {
			 	headers : {
			 		"Accept" : "application/json",
			 		"Content-Type" : "application/json",
			 	}
			 })
		 	.then(function(response) { // Success - we got the data from the REST server
		 		deferred.resolve(response.data);
		 	}, function(error) { // Failure with the HTTP Request
		 		deferred.reject(error);
		 	});
		 return deferred.promise;
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
		var deferred = $q.defer();
		 $http.get("http://localhost:8080/DemoNG/rest/customers/" + customerId)
		 	.then(function(response) { // Success - we got the data from the REST server
		 		deferred.resolve(response.data);
		 	}, function(error) { // Failure with the HTTP Request
		 		deferred.reject(error);
		 	});
		 return deferred.promise;
	};
	
	this.getCustomersByLastName = function(lastName) {
		var deferred = $q.defer();
		 $http.get("http://localhost:8080/DemoNG/rest/customers/lastName/" + lastName)
		 	.then(function(response) { // Success - we got the data from the REST server
		 		deferred.resolve(response.data);
		 	}, function(error) { // Failure with the HTTP Request
		 		deferred.reject(error);
		 	});
		 return deferred.promise;
	};
	
	this.updateCustomer = function(cust) {
		var deferred = $q.defer();
		 $http.put("http://localhost:8080/DemoNG/rest/customers", cust, {
			 	headers : {
			 		"Accept" : "application/json",
			 		"Content-Type" : "application/json",
			 	}
			 })
		 	.then(function(response) { // Success - we got the data from the REST server
		 		deferred.resolve(response.data);
		 	}, function(error) { // Failure with the HTTP Request
		 		deferred.reject(error);
		 	});
		 return deferred.promise;
	};

	this.deleteCustomer = function(cust) {
		var deferred = $q.defer();
		 $http.delete("http://localhost:8080/DemoNG/rest/customers", {
			 	data : cust,
			 	headers : {
			 		"Accept" : "application/json",
			 		"Content-Type" : "application/json",
			 	}
			 })
		 	.then(function(response) { // Success - we got the data from the REST server
		 		deferred.resolve(response.data);
		 	}, function(error) { // Failure with the HTTP Request
		 		deferred.reject(error);
		 	});
		 return deferred.promise;
	};

});