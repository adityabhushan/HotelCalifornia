(function() {
    angular.module('room')

    .controller('hotelCtrl', ['$scope', function($scope) {

        if(!localStorage.getItem('totalRooms')) {
        	$scope.rooms = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]            
            localStorage.setItem('totalRooms', JSON.stringify($scope.rooms))
        } else {
            $scope.rooms = JSON.parse(localStorage.getItem('totalRooms'))
        }

        $scope.addRoom = function() {
            $scope.rooms.push({ id: $scope.rooms.length + 1 })
            localStorage.setItem('totalRooms', JSON.stringify($scope.rooms))
        }
    }])
})()
