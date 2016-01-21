(function(root, doc, undefined) {

    'use strict';

    var avatarDirective = function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                avatarDatas: '=datas'
            },
            templateUrl: 'views/template.html',
            link: function($scope, $elem, $attrs) {

                $scope.isolatedDatas = {};
                angular.forEach($scope.avatarDatas, function(value, key){
                    if(key !== 'picture'){
                        $scope.isolatedDatas[key] = value;
                    }
                });
                
                function togglePictureState(state) {
                    $scope.$apply(function(){
                        $scope.showpicture = state;
                    });
                }

                $elem.on('mouseenter', angular.bind(null, togglePictureState, true));
                $elem.on('mouseleave', angular.bind(null, togglePictureState, false));
            }
        }
    };

    angular.module('myApp').directive('avatarDirective', avatarDirective);

})(window, document);