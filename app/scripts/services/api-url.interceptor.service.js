'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .factory('apiUrlInterceptor', apiUrlInterceptor);

    apiUrlInterceptor.$inject = [
        '$q',
        'API_ROOT_URL'
    ];

    function apiUrlInterceptor($q, API_ROOT_URL) {

        var service = {
            request: request
        };

        return service;



        function request(config) {
            var url = config.url;

            // ignore template requests
            if (url.substr(url.length - 5) === '.html') {
                return config || $q.when(config);
            }

            config.url = API_ROOT_URL + config.url;
            return config || $q.when(config);
        }
    }

})();
