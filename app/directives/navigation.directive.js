



angular.module('demo')
    .directive('navigation', function () {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: "/partials/navigation.html",
        link: function (scope, elem, attrs) {
            console.log("running link of navigation-directive");

            scope.go = function (name) {
                scope.$root.route = name;
            };
        }
    };
});