(function() {

    var app = angular.module('home.controller', [ 'media.service' ]);

    app.controller('homeController', function ($scope, Media) {

        $scope.view = false;

        $scope.videos = Media.getVideos();
        $scope.images = Media.getImages();

        $scope.image = $scope.images[0];
        $scope.video = $scope.videos[0].video;

        $scope.showImage = function (image) {

            $scope.image = image.replace(/preview/, 'fullview');

        };

        $scope.showVideo = function (video) {

            $scope.video = video.video;

        };

    });

    app.filter('trustAsResourceUrl', function ($sce) {

        return function (val) {

            return $sce.trustAsResourceUrl(val.toString());

        };

    });

})();