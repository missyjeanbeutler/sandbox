let basic_display = new Vue({
  el: '#basic_display',
  data: {
    message: 'Hey there you!'
  }
})

let iteration = new Vue({
  el: '#iteration',
  data: {
    numbers: [1, 2, 3, 4, 5]
  }
})

// v-for, think for loop. 

let binding = new Vue({
  el: '#binding',
  data: {
    style: 'color: blue'
  }
})

// anything following a v- is called a directive, in this case, bind is the directive. They are special attributes provided by Vue that add reactive behavior to the DOM. The style attribute is now linked to the style property here in javascript. 

let conditionals = new Vue({
  el: '#conditionals',
  data: {
    seen: true,
    message: "I'm here! You can see me!"
  }
})

let listening_events = new Vue({
  el: '#listening_events',
  data: {
    good: 'Dr. Jekyll',
    bad: 'Mr. Hyde',
    show: true
  },
  methods: {
    switching: function() {
      this.show = !this.show
    }
  }
})

let two_way_binding = new Vue({
  el: '#two_way_binding',
  data: {
    message: ''
  }
})

// This is very similar to AngularJS' ng-model. Just don't forget to predeclare the variable in the Vue instance otherwise it will throw an error that it's undefined. You can't just use model, it has to pre-exist (kind of like react with initializing state.)

Vue.component('list', {
  props: ['stuff'],
  template: '<h4>{{ stuff }}</h4>'
})

// Props are bound inside of the list component in the html file. You can also add a key there. Whatever the string is in the props array is what is bound in the component. The value of what it is set to in the component tag will be the value wherever the props string is referrenced in the template.


let using_components = new Vue({
  el: '#using_components',
  data: {
    theList: ['one', 'two', 'three']
    ,
    theSecondList: [
      { id: 0, item: 'thing1'},
      { id: 1, item: 'thing2'},
      { id: 2, item: 'thing3'}
    ]
  }
})
