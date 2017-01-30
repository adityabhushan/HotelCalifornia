(function() {
    angular.module('room')

    .controller('hotelCtrl', ['$scope', function ($scope) {
        $scope.rooms = [{ id: 1 }, { id: 2 }, { id: 3 }]

        $scope.addRoom = function() {
            $scope.rooms.push({ id: $scope.rooms.length + 1 })
        }
    }])
})()
