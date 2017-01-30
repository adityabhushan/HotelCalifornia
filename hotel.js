(function() {
    var app = angular.module('room', ['ui.router'])

    app.controller('roomController', function roomController($scope) {
        $scope.rooms = [{ id: 1 }, { id: 2 }, { id: 3 }]

        $scope.addRoom = function() {
            $scope.rooms.push({ id: $scope.rooms.length + 1 })
        }
    })
})()
