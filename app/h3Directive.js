angular.module('app').directive('h3Directive', function () {
        return {
        restrict: 'E',
        template: '<h3>{{title}}</h3>',
        link: function (scope, elem, attrs) {
                elem.bind('mouseenter', function () {
                    elem.css('color', 'red');
                });

                elem.bind('mouseleave', function () {
                    elem.css('color', 'silver');
                });
        },
        scope: {
	        title: '@'
        }
        
        };
    });