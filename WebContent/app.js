var workingCustomer;
//var customers = [];


//var app = angular.module("DemoNG", []);
angular.module("DemoNG", ['ngRoute'])
	//.config(...)
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when("/", {
			templateUrl: 'main',
			//controller: 'MainController'
		})
		.when("/CustomerForm", {
			templateUrl: 'CustomerForm'
		})
		.when("/CustomerTable", {
			templateUrl: 'CustomerTable'
		})
		.otherwise({
			redirectTo: "/#"
		})
		//$locationProvider.html5Mode(true);
	})
	.run(function($rootScope) { // $rootScope is really the "app"
		console.log("Started...");
		
		$rootScope.customers = [
		                        new Customer(1, "Harry", "Potter", "+44 0206 555-1212", "harry.potter@hogwarts.ac.uk"),
		                        new Customer(2, "Ron", "Weasley", "+44 0206 555-1213", "ron@hogwarts.ac.uk"),
		                        new Customer(3, "Hermione", "Granger", "+44 0206 555-1512", "hermione@hogwarts.ac.uk"),
		                        new Customer(4, "Neville", "Longbottom", "+44 0206 555-1513", "neville@hogwarts.ac.uk"),
		                        
		                        ];
		$rootScope.lastCustomerId = 0;
		
		$rootScope.$on("CustomerAddedEvent", function(evt, cust) {
			console.log(cust);
			cust.customerId = ++$rootScope.lastCustomerId; // implicit creation first time with val=0
			$rootScope.customers.push(cust);
		});
	})
	//.controller(...)






;



