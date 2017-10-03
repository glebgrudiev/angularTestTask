'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .controller('AlbumController', AlbumController);

    AlbumController.$inject = [
        '$stateParams',
        'moment',
        'albumsService'
    ];

    function AlbumController($stateParams, moment, albumsService) {
        console.log('AlbumController');

        var vm = this;

        vm.addNewVideo = addNewVideo;

        vm.albumId = $stateParams.albumId;
        vm.album = {
            videos: []
        };
        vm.newVideo = {};


        init();



        function init () {
            albumsService
                .getAlbum(vm.albumId)
                .then(function (response) {
                    vm.album = response;
                })
                .catch(function (response) {
                    console.log('error', response);
                });
        }



        function addNewVideo() {
            var id = moment().valueOf();
            vm.album.videos.push({
                id: id,
                title: vm.newVideo.title,
                desc: vm.newVideo.desc,
                url: vm.newVideo.url
            });
            vm.newVideo = {};
        }
    }

})();
