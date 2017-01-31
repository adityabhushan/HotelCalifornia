(function() {
    angular.module('room')

    .controller('hotelCtrl', ['$scope', function($scope) {

    	//Store and retrieve rooms from localStorage
        if(!localStorage.getItem('allRooms')) {
        	$scope.rooms = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]            
            localStorage.setItem('allRooms', JSON.stringify($scope.rooms))
        } else {
            $scope.rooms = JSON.parse(localStorage.getItem('allRooms'))
        }

        $scope.addRoom = function() {
            $scope.rooms.push({ id: $scope.rooms.length + 1 })
            localStorage.setItem('allRooms', JSON.stringify($scope.rooms))
        }
    }])
})()
