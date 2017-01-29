angular.module('room').component('myroom', {
  // template: '<h3> this is my room </h3>'
  // // controller: function () {
  // //   this.rooms = []

  // //   this.addRoom = function () {
  // //     this.rooms.push({ id: this.rooms.length + 1, name: 'Room No ' + (this.rooms.length + 1) })
  // //   }
  // // }
  template: '<h3>{{$ctrl.greeting}} solar sytem!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

  controller: function () {
    this.greeting = 'hello'

    this.toggleGreeting = function () {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})
