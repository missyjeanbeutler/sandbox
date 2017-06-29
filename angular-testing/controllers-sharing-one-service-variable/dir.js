angular.module('app').directive('dir', function(svc) {

  return {
    scope:{},
    template: '<h4>from the directive ---> </h4> {{test.num}}',
    link: function(scope, el, att) {
      scope.test = svc.count;
    }
  }

  
})