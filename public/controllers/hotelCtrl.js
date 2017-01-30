(function() {
    angular.module('room')

    .controller('hotelCtrl', ['$scope', 'roomid', function($scope, roomid) {
    	
        $scope.rooms = [{ id: 1 }, { id: 2 }, { id: 3 }]

        $scope.addRoom = function() {
            $scope.rooms.push({ id: $scope.rooms.length + 1 })
        }
    }])
})()
