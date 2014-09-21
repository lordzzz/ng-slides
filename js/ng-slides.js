(function (window, angular) {
   'use strict';

    angular.module('ngSlides', ['ngAnimate'])
	    .controller('SlidesCtrl', ['$scope', '$window', function ($scope, $window) {
		    $scope.currentSlide = 0;
		    $scope.slidesCount = 0;
		    $scope.progress = 0;

		    $scope.$watch('currentSlide', function (newValue) {
				$scope.progress = ((newValue + 1) / $scope.slidesCount) * 100;
		    });

		    $scope.prevSlide = function () {
			    if ($scope.currentSlide > 0) {
				    $scope.currentSlide--;
				    $scope.$apply();
			    }
		    };

		    $scope.nextSlide = function () {
			    if ($scope.currentSlide < $scope.slidesCount - 1) {
				    $scope.currentSlide++;
				    $scope.$apply();
			    }
		    };

		    angular.element($window).bind('keydown', function(e) {
			    switch (e.keyCode) {
				    case 37: {
					    $scope.prevSlide();
					    break;
				    }
				    case 39: {
					    $scope.nextSlide();
					    break;
				    }
			    }
		    });
	    }])
        .directive('presentation', function () {
            return {
                restrict: 'E',
	            controller: 'SlidesCtrl',
	            link: function (scope, element, attrs) {
		            // count directives 'ngSwitchWhen'
		            angular.forEach(element[0].childNodes, function(obj){
			            if (obj.nodeType === 8) {
				            var value = obj.nodeValue.trim();
				            if (value.search('ngSwitchWhen') != -1) {
					            scope.slidesCount++;
				            }
			            }
		            });
		            // TODO:
		            //scope.currentSlide = attrs.start || 0; // start slide
		            //scope.animate = attr.animate || 'animate-bottom';
	            }
            };
        })
        .directive('slide', function () {
            return {
                restrict: 'E',
	            link: function postLink(scope, element, attrs) {
		            element.addClass('animate-bottom');
	            }
            };
        });

}(window, angular));