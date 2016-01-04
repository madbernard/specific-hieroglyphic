angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
  $scope.getLinks().then(function(fetchedLinks){
    $scope.data.links = fetchedLinks;
    console.log(fetchedLinks, 'links fetched in links.js?');
  });
});
