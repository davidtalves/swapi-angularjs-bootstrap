(function () {
    'use strict';

    angular.module('app').controller('FilmsController', FilmsController);

    FilmsController.$inject = ['$http'];

    function FilmsController($http) {
        var vm = this;
        vm.title = 'SW Films';
        
        vm.films = [];

        var baseUrl = 'https://swapi.co/api/';
        var header = {};

        activate();

        function activate() {
            getFilms();
        };

        function getFilms() {
            $http({
                method: 'GET',
                url: baseUrl + 'films',
                headers: header,
            }).then(function (response) {
                vm.films = response.data.results;
                console.log(vm.films);
            }, function (error) {
                console.log(error);
            });
        }        
    }
})();