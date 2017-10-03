'use strict';

(function () {

    angular
        .module('YoutubeLib')
        .directive('albumListItem', albumListItem);

    albumListItem.$inject = [];

    function albumListItem() {
        var directive = {
            restrict: 'A',
            templateUrl: '/templates/album-list-item.html',
            scope: {
                albumTitle: '=',
                albumId: '='
            },
            link: linkFunc
        };

        return directive;



        function linkFunc(scope, el) {
            console.log('albumListItem');
        }

    }

})();

