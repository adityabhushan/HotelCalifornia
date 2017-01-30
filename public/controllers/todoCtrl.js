(function() {
    angular.module('room')

    .controller('todoCtrl', ['$scope', 'roomid', function($scope, roomid) {
        id = window.location.href.split('/')[window.location.href.split('/').length-1]
        console.log(id)
        
        a = 'hi'
        console.log(a)
        console.log(window.location.href.split('/')[window.location.href.split('/').length-1])
        localStorage.setItem(id, JSON.stringify(['Clean this room', 'Set furniture']))
        $scope.todos = JSON.parse(localStorage.getItem(id))
        console.log(roomid.room)
        $scope.addTodo = function() {
            $scope.errortext = ""
            if (!$scope.addItem) {
                return }
            if ($scope.todos.indexOf($scope.addItem) == -1) {
                $scope.todos.push($scope.addItem)
                localStorage.setItem(id, JSON.stringify($scope.todos))
                $scope.addItem = ''
            } else {
                $scope.errortext = "You have already added this item to your list."
            }
        }

        $scope.removeItem = function(x) {
            $scope.errortext = ""
            $scope.todos.splice(x, 1)
            localStorage.setItem(id, JSON.stringify($scope.todos))
        }

        $scope.getTotalTodos = function() {
            return $scope.todos.length
        }
    }])
})()
