



angular.module('demo')
    .directive('form', function () {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: "/partials/form.html",
        link: function (scope, elem, attrs) {
            
            var data = {
                text: "foobar",
                number: "2",
                date: new Date()
            };

            scope.data = data;            
        }
    };
});