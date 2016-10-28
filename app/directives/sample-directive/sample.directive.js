



angular.module('demo')
    .directive('sample', function () {
    'use strict';

    return {
        restrict: 'E',
        link: function (scope, elem, attrs) {
            console.log("running link of sample-directive");
            elem[0].innerHTML = attrs.name;
        }
    };
});