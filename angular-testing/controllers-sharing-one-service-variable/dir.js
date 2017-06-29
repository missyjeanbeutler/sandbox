angular.module('app').directive('dir', function(svc) {

  return {
    scope:{},
    template: '<p>{{test.num}}</p>',
    link: function(scope, el, att) {
      scope.test = svc.count;
    }
  }

  
})