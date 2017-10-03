'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .run(YoutubeLibRun);

    YoutubeLibRun.$inject = [];

    function YoutubeLibRun() {
        console.log('Run section');
    }

})();
