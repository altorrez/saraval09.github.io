(function (google) {

    var app = angular.module('google.maps.directive', []);

    app.directive('googleMap', function () {

        return {
            restrict: 'AE',

            template: '<div id="map"></div>',

            controller: function ($scope) {

                var mapOptions = {
                    zoom: 15,
                    center: new google.maps.LatLng(28.602432, -81.200264),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            }
        };

    });

})(google);