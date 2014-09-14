(function () {
   'use strict';

    window.angular.module('ngSlides', [])
	    .controller('SlidesCtrl', ['$scope', '$window', function ($scope, $window) {
		    $scope.currentSlide = 0;
		    $scope.slides = [];
		    $scope.progress = 0;

		    $scope.$watch('currentSlide', function (newValue) {
				$scope.progress = (newValue / $scope.slides.length) * 100;
		    });

		    $scope.visibilitySlide = function (i, visibility) {
			    $scope.slides[i].css({
				    visibility: visibility
			    });
		    };

		    $scope.prevSlide = function () {
			    if ($scope.currentSlide > 1) {
				    $scope.currentSlide--;
				    $scope.$apply();
				    $scope.visibilitySlide($scope.currentSlide, 'hidden');
				    $scope.visibilitySlide($scope.currentSlide - 1, 'visible');
			    }
		    };

		    $scope.nextSlide = function () {
			    if ($scope.currentSlide < $scope.slides.length) {
				    $scope.currentSlide++;
				    $scope.$apply();
				    if ($scope.currentSlide > 1) {
					    $scope.visibilitySlide($scope.currentSlide - 2, 'hidden');
				    }
				    $scope.visibilitySlide($scope.currentSlide - 1 , 'visible')
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

		    angular.element($window).bind('load', function() {
			    $scope.nextSlide();
		    });
	    }])
        .directive('presentation', function () {
            return {
                restrict: 'E'
            };
        })
        .directive('slide', function () {
            return {
                restrict: 'E',
	            link: function(scope, element) {
		            element.addClass('slide-hide');
					scope.slides.push(element);
	            }
            };
        });

}());