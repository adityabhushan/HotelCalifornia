(function () {
  var app = angular.module('room', [])

  app.controller('RoomController', function () {
    this.rooms = []

    this.addRoom = function () {
   	this.rooms.push({id: this.rooms.length + 1, name: 'Room No ' + (this.rooms.length + 1)})
    }
  })
})()
