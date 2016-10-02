angular.module('cv', [])

.controller('AppController', function() {
})

.directive('percent', function() {
    return {
        restrict: 'E',
        scope: {
            value: '=',
            title: '='
        },
        templateUrl: 'percent.html',
        link: function(scope, element, attrs) {
            element.css({
                'width': '100%',
                'display': 'inline-block',
                'text-align': 'center',
                'padding': '10px'
            });

            element.find('#circle').circleProgress({
                value: scope.value,
                startAngle: -Math.PI/2,
                size: 70,
                lineCap: 'round',
                fill: {
                    color: 'goldenrod'
                },
                emptyFill: '#f5f5f5'
            });

            element.find('#value').css({
                'display': 'inline-block',
                'text-align': 'center',
                'margin-top': '-45px',
                'margin-left': '13px',
                'font-size': '16px',
                'font-weight': 'bold'
            });

            element.find('#title').css({
                'font-weight': 'bold',
                'padding-top': '5px '
            });
        }
    }
});
