angular.module('app').config(function($routeProvider){
	
	$routeProvider.when("/", {
		templateUrl: "html/institute.html",
		controller: "instituteController"
	});

	
});