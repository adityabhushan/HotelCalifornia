(function() {
    angular
    .module('room', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/')
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/hotel.html',
                controller: 'hotelCtrl'
            })
            .state('room', {
                url:'/{roomId}',
                templateUrl: 'templates/todo.html',
                controller: 'todoCtrl'
            })

    }])
    .service('roomid', function (){
        var roomid = this
        roomid.room = 1
    })
})()
