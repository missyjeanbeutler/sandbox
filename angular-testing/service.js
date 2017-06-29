angular.module('app').service('svc', function() {


this.count = {}
this.count.num = 1
this.count.num2 = 0

this.clicked = (ctrlNum) => {
  this.count.num++
  this.count.num2 = ctrlNum
  return 'success! ' + this.count.num + " the other " + ctrlNum
}

})