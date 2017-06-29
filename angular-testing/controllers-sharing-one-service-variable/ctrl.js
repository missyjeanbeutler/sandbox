angular.module('app').controller('ctrl', function($scope, svc) {

$scope.ctrlCount = 5

$scope.click = () => {
  svc.clicked(++$scope.ctrlCount)
}


})