/**
 * CustomerStorageService is an interface for specific implementations
 * like:
 * 	CustomerLocalStorageService - available now
 *	CustomerRESTStorageService - available now
 *	CustomerWSStorageService - possible future service
 *  CustomerWebDBStorageService - possible future service
 *  CustomerIndexedDBStorageService - possible future service
 *  CustomerFileAPIStorageService - possible future service
 */
angular.module("DemoNG").service('CustomerRESTStorageService', function($rootScope, CustomerLocalStorageService) {
	var impl = CustomerLocalStorageService;
	
	this.addCustomer = function(cust) {
		return impl.addCustomer(cust);
	};
	
	this.getCustomers = function() {
		return impl.getCustomers();
	};
	
	this.getCustomerById = function(customerId) {
		return impl.getCustomerById(customerId);
	};
	
	this.getCustomersByLastName = function(lastName) {
		return impl.getCustomersByLastName(lastName);
	};
	
	this.updateCustomer = function(cust) {
		return impl.updateCustomer(cust);
	};

	this.deleteCustomer = function(cust) {
		return impl.deleteCustomer(cust);
	};

});