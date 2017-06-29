angular.module('app').service('svc', function() {


this.count = {}
this.count.num = 1
this.count.num2 = 0

this.clicked = (num) => {
  this.count.num++
  this.count.num2 = num
  return 'success! ' + this.count.num + " the other " + num
}

})