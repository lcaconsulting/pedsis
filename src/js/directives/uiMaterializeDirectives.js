angular.module("app").directive("collapsible", ["$timeout", function ($timeout) {
	return {
		link: function (scope, element, attrs) {
			$timeout(function () {
				$(element).collapsible();
			});
			if ("watch" in attrs) {
				scope.$watch(function () {
					return element[0].innerHTML;
				}, function (oldVal, newVal) {
					if (oldVal !== newVal) {
						$timeout(function () {
							$(element).collapsible();
						});
					}
				});
			}
		}
	};
}]);


angular.module("app").directive("dropdown", ["$compile", "$timeout", function ($compile, $timeout) {
    return {
    	restrict: 'AEC',
        scope: {
            inDuration: "@",
            outDuration: "@",
            constrainWidth: "@",
            hover: "@",
            alignment: "@",
            gutter: "@",
            belowOrigin: "@"
        },
        link: function (scope, element, attrs) {
            $timeout(function () {
                $compile(element.contents())(scope);
                $(element).dropdown({
                    inDuration: (angular.isDefined(scope.inDuration)) ? scope.inDuration : undefined,
                    outDuration: (angular.isDefined(scope.outDuration)) ? scope.outDuration : undefined,
                    constrain_width: (angular.isDefined(scope.constrainWidth)) ? scope.constrainWidth : undefined,
                    hover: (angular.isDefined(scope.hover)) ? scope.hover : undefined,
                    alignment: (angular.isDefined(scope.alignment)) ? scope.alignment : undefined,
                    gutter: (angular.isDefined(scope.gutter)) ? scope.gutter : undefined,
                    belowOrigin: (angular.isDefined(scope.belowOrigin)) ? scope.belowOrigin : undefined
                });
            });
        }
    };
}]);
