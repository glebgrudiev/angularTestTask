'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .controller('AlbumsListController', AlbumsListController);

    AlbumsListController.$inject = [
        'albumsService'
    ];

    function AlbumsListController(albumsService) {
        console.log('AlbumsListController');

        var vm = this;

        vm.albums = [];


        init();


        function init () {
            albumsService
                .getAlbums()
                .then(function (response) {
                    vm.albums = response;
                })
                .catch(function (response) {
                    console.log('error', response);
                });
        }
    }

})();
