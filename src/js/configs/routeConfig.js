angular.module('app').config(function($routeProvider){
	
	$routeProvider.when("/", {
		templateUrl: "html/rda/institute.html",
		controller: "instituteController"
	});

	$routeProvider.when("/rda/agreement", {
		templateUrl: "html/rda/agreement.html",
		controller: "instituteController"
	});

	$routeProvider.otherwise({redirectTo: "/"});

	
});