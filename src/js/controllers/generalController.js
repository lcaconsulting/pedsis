angular.module("app").controller("generalController", function($scope, $window){

	$scope.showMenu = true;
	$scope.toggleMenu = function(){
		$scope.showMenu = !$scope.showMenu;
	};

	
	$scope.$watch(function () {
		 return $window.innerWidth;
	},function(width) {
		if(width < 1410){
			$scope.showMenu = false;
		}
	}, true);
	
	angular.element($window).bind('resize', function(e) {
		$scope.$apply();
	});

});
