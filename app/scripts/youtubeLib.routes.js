'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .config(routes);



    routes.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];



    function routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url          : '/',
                controller: function ($state) {
                    console.log('home');
                    $state.go('albums-list');
                }
            })
            .state('album-specified', {
                url          : '/albums/{albumId:int}',
                templateUrl  : 'templates/album.html',
                controller   : 'AlbumController',
                controllerAs : 'albumCtrl'
            })
            .state('albums-list', {
                url         : '/albums',
                templateUrl : 'templates/albums-list.html',
                controller  : 'AlbumsListController',
                controllerAs: 'albumsListCtrl'
            });

    }

})();
