(function () {

    var app = angular.module('ericWebApp', [

        'ngRoute',
        'google.maps.directive',
        'home.controller'

    ]);

    app.config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {

            templateUrl: 'app/public/partial/home.html',
            controller: 'homeController'

        }).when('/bio', {

            templateUrl: 'app/public/partial/bio.html'

        }).when('/contact', {

            templateUrl: 'app/public/partial/contact.html'

        }).when('/videos', {

            templateUrl: 'app/public/partial/videos.html'

        }).otherwise({

            templateUrl: 'app/public/partial/404.html'

        });

        $locationProvider.html5Mode(false);

    });

})();