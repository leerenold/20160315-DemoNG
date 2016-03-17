var workingCustomer;
// var customers = [];


// var app = angular.module("DemoNG", []);
angular.module("DemoNG", ['ngRoute'])
	// .config(...)
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when("/", {
			templateUrl: 'main.html',
			// controller: 'MainController'
		})
		.when("/CustomerForm", {
			templateUrl: 'CustomerForm.html'
		})
		.when("/CustomerTable", {
			templateUrl: 'CustomerTable.html'
		})
		.otherwise({
			redirectTo: "/#"
		})
		// $locationProvider.html5Mode(true);
	})
	.run(["$rootScope", "CustomerLocalStorageService", "CustomerRESTStorageService", 
	      function($rootScope, CustomerLocalStorageService, CustomerRESTStorageService) { // $rootScope is really the "app"
		console.log("Started...");
		
		$rootScope.$on("CustomerAddedEvent", function(evt, cust) {
			CustomerLocalStorageService.addCustomer(cust);
		});
		
//		CustomerRESTStorageService.getCustomers();
//
//		$rootScope.$on("CustomersRetrievedEvent", function(evt, custs) {
//			console.log("app js got custs");
//			console.log(custs);
//		});
	}])
	// .controller(...)


;



