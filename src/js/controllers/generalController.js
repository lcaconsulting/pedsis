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


	$scope.$on('$viewContentLoaded', function(scope, next, current){
		$('select').material_select();

		$('body').on('change', '.file-field input[type="file"]', function(){
			var path_input = $(this).parents('.file-field').find('input.file-path');
			path_input.val($(this)[0].files[0].name);
		});
	});

});
