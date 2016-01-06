angular.module('specGlyph', ['ui.router'])


.controller('GlyphClasser', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.foo = {
    pipe: true,
    bk: false
  };


  $scope.yesPipe = function(param) {
  console.log($scope.nameBox, 'in yesPipe');
  console.log(param, 'param');

    if ($scope.nameBox) {
      return true;
    }
    else return true;
  };

}]);

// <p class="hi" ng-class="{pipe: yesPipe(), bk: yesBlock(), stack: yesStack(), line: yesLine()}">{{ nameBox.toLowerCase() }}</p>
