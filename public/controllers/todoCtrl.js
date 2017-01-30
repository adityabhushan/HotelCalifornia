(function() {
    angular.module('room')

    .controller('todoCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.id = $stateParams.roomId
        if(!localStorage.getItem($scope.id)) {
            localStorage.setItem($scope.id, JSON.stringify(['Clean this room', 'Set furniture']))            
        } else {
            $scope.todos = JSON.parse(localStorage.getItem($scope.id))
        }
        $scope.addTodo = function() {
            $scope.errortext = ""
            if (!$scope.addItem) {
                return }
            if ($scope.todos.indexOf($scope.addItem) == -1) {
                $scope.todos.push($scope.addItem)
                localStorage.setItem($scope.id, JSON.stringify($scope.todos))
                $scope.addItem = ''
            } else {
                $scope.errortext = "You have already added this item to your list."
            }
        }

        $scope.removeItem = function(x) {
            $scope.errortext = ""
            $scope.todos.splice(x, 1)
            localStorage.setItem($scope.id, JSON.stringify($scope.todos))
        }

        $scope.getTotalTodos = function() {
            return $scope.todos.length
        }
    }])
})()
