angular.module('app').controller('ctrl', function($scope, svc) {

let count = 5

$scope.click = () => {
  alert(svc.clicked(++count))
}


})