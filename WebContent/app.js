var workingCustomer;
//var customers = [];


//var app = angular.module("DemoNG", []);
angular.module("DemoNG", [])
	//.config(...)
	//.config(...)
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



