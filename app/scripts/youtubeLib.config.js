'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .config(config);

    config.$inject = [
        '$httpProvider'
    ];


    function config($httpProvider) {
        $httpProvider.interceptors.push('apiUrlInterceptor');
    }

})();
