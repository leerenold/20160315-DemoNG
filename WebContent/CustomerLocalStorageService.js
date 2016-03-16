angular.module("DemoNG").service('CustomerLocalStorageService', function($rootScope) {
	this.lastCustomerId = 0;
	this.customers = [];
	
	this.addCustomer = function(cust) {
		cust.customerId = ++this.lastCustomerId; 
		this.customers.push(cust);
		window.localStorage.setItem("customers", JSON.stringify(this.customers));
		window.localStorage.setItem("lastCustomerId", this.lastCustomerId);
	};
	
	this.getCustomers = function() {
		return this.customers;
	}
	
	this.deleteCustomer = function(cust) {
		// TODO-CV - walk through the array and delete this customer (see #splice)
		// Consider using underscore/lodash for this kind of work
		if (cust && cust.customerId > 0) {
			for (var i in this.customers) {
				var tCust = this.customers[i];
				if (cust.customerId == tCust.customerId) {
					this.customers.splice(i, 1);
					return;
				}
			}
			window.localStorage.setItem("customers", JSON.stringify(this.customers));
		}
	}
	
	var lsCusts = window.localStorage.getItem("customers");
	var lsLCI =  window.localStorage.getItem("lastCustomerId");
	
	if (lsCusts && lsLCI) {
		this.customers = JSON.parse(lsCusts);
		this.lastCustomerId = lsLCI; // stored as string - will it autoconvert to a number?
	}
	
	if (this.customers.length == 0) {
		console.log("Found no customers locally - Creating initial customers...");
		this.addCustomer(new Customer(-1, "Harry", "Potter", "+44 0206 555-1212", "harry.potter@hogwarts.ac.uk"));
		this.addCustomer(new Customer(-1, "Ron", "Weasley", "+44 0206 555-1213", "ron@hogwarts.ac.uk"));
		this.addCustomer(new Customer(-1, "Hermione", "Granger", "+44 0206 555-1512", "hermione@hogwarts.ac.uk"));
		this.addCustomer(new Customer(-1, "Neville", "Longbottom", "+44 0206 555-1513", "neville@hogwarts.ac.uk"));
	}

});