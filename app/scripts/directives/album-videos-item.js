'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .directive('albumVideosItem', albumVideosItem);

    albumVideosItem.$inject = [];

    function albumVideosItem() {
        var directive = {
            restrict: 'A',
            templateUrl: '/templates/album-videos-item.html',
            scope: {
                videoTitle: '=',
                videoLink: '='
            },
            link: linkFunc
        };

        return directive;



        function linkFunc(scope, el) {
            console.log('albumVideosItem');
        }

    }

})();

