(function () {
    'use strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/index.html'
            })
            .when('/films', {
                controller: 'FilmsController',
                controllerAs: 'vm',
                templateUrl: 'app/views/films.html'
            })
            .when('/characters/:id',{
                controller: 'CharactersController',
                controllerAs: 'vm',
                templateUrl: 'app/views/characters.html'
            })
            .otherwise({
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/404.html'
            });
    });
})();