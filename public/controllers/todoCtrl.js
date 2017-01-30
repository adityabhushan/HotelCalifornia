function TodoCtrl($scope) {

    $scope.todos = JSON.parse(localStorage.getItem('todo'))

    $scope.addTodo = function() {
        $scope.errortext = ""
        if (!$scope.addItem) {return}
        if ($scope.todos.indexOf($scope.addItem) == -1) {
            $scope.todos.push($scope.addItem)
            localStorage.setItem('todo',JSON.stringify($scope.todos))
            $scope.addItem = ''
        } else {
            $scope.errortext = "You have already added this to your list."
        }
    }

    $scope.removeItem = function (x) {
        $scope.errortext = ""
        $scope.todos.splice(x, 1)
        localStorage.setItem('todo',JSON.stringify($scope.todos))
    }

    $scope.getTotalTodos = function() {
        return $scope.todos.length
    }
}