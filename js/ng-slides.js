(function () {
   'use strict';

    window.angular.module('ngSlides', [])
        .controller('SlidesCtrl', function () {

        })
        .directive('presentation', function () {
            return {
                restrict: 'E'
            };
        })
        .directive('slide', function () {
            return {
                restrict: 'E'
            };
        });

}());