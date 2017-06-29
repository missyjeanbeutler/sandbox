angular.module('app').controller('ctrl', function($scope, svc) {

$scope.ctrlCount = 5

$scope.click = () => {
  alert(svc.clicked(++$scope.ctrlCount))
}


})