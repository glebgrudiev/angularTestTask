'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .controller('YoutubeLibRootController', YoutubeLibRootController);

    YoutubeLibRootController.$inject = [
        '$state'
    ];

    function YoutubeLibRootController($state) {
        console.log('YoutubeLibRootController');

        var vm = this;

        vm.state = $state;

    }

})();
