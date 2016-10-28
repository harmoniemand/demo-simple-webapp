



angular.module('demo')
    .directive('field', function () {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: "/partials/field.html",
        scope: {
            model: "="
        },
        link: function (scope, elem, attrs) {
            scope.label = attrs.label;
            scope.type = attrs.type.toLowerCase();
        }
    };
});