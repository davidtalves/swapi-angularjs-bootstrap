(function () {
    'use strict';

    angular.module('app').controller('CharactersController', CharactersController);

    CharactersController.$inject = ['$http', '$routeParams'];

    function CharactersController($http, $routeParams) {
        var vm = this;
        vm.title = 'SW Characters';

        vm.characters = [];
        vm.getCharacters = getCharacters;

        var baseUrl = 'https://swapi.co/api/';
        var header = {};

        activate();

        function activate() {
            getCharacters($routeParams.id);
        };

        function getCharacters(id) {            
            $http({
                method: 'GET',
                url: baseUrl + 'films/' + id,
                headers: header,
            }).then(function (response) {
                var data = response.data;
                console.log('entrou3');
                console.log(data);
                data.characters.forEach(getPeople);

                function getPeople(item, index) {
                    console.log(item);
                };

            }, function (error) {
                console.log(error);
            });
        }

    };
})();