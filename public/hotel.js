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
    }])
})()
