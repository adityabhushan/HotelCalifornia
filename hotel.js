(function () {
  var app = angular.module('room', ['ui.router'])

    // app.controller('RoomController', function () {
    //   this.rooms = []

    //   this.addRoom = function () {
    //  	this.rooms.push({id: this.rooms.length + 1, name: 'Room No ' + (this.rooms.length + 1)})
    //   }
    // })

  app.config(function ($stateProvider) {
    var roomState = {
      name: 'room',
      url: '/room',
            // component: 'myroom'

      controller: function ($scope) {
        $scope.greeting = 'hello'

        $scope.toggleGreeting = function () {
          $scope.greeting = ($scope.greeting == 'hello') ? 'whats up' : 'hello'
        }
      },
      template: '<h3>{{greeting}} solar sytem!</h3>' +
                '<button ng-click="toggleGreeting()">toggle greeting</button>'
    }

    $stateProvider.state(roomState)
  })
})()
