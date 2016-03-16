var workingCustomer;
// var customers = [];


// var app = angular.module("DemoNG", []);
angular.module("DemoNG", ['ngRoute'])
	// .config(...)
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when("/", {
			templateUrl: 'main',
			// controller: 'MainController'
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
		// $locationProvider.html5Mode(true);
	})
	.run(["$rootScope", "CustomerLocalStorageService", function($rootScope, CustomerLocalStorageService) { // $rootScope is really the "app"
		console.log("Started...");
		
		$rootScope.$on("CustomerAddedEvent", function(evt, cust) {
			CustomerLocalStorageService.addCustomer(cust);
		});
		
		
	}])
	// .controller(...)


;



