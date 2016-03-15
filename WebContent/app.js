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
		
		$rootScope.customers = [];
		
		$rootScope.$on("CustomerAddedEvent", function(evt, args) {
			console.log(args);
			$rootScope.customers.push(args);
		});
	})
	//.controller(...)






;



