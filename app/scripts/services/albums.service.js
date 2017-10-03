'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .factory('albumsService', albumsService);

    albumsService.$inject = [
        '$http',
        '_'
    ];

    function albumsService ($http, _) {

        var data = {
            getAlbums: getAlbums,
            getAlbum: getAlbum
        };

        return data;



        function getAlbums () {
            return $http({
                url: 'local.json',
                method: 'GET'
            }).then(function(response) {
                return response.data;
            });
        }



         //imitation api endpoint for getting album by id
        function getAlbum (id) {
            return $http({
                url: 'local.json',
                method: 'GET'
            }).then(function(response) {
                return _.find(response.data, {'id': parseInt(id, 10)});
            });
        }
    }


})();
