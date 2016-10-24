(function() {

    var app = angular.module('media.service', []);


    app.factory('Media', function () {

        var images = [

            'assets/img/img1_preview.jpg',
            'assets/img/img2_preview.jpg',
            'assets/img/img3_preview.jpg',
            'assets/img/img4_preview.jpg',
            'assets/img/img5_preview.jpg',
            'assets/img/img6_preview.jpg'

        ];

        var videos = [

            {

                thumb: 'assets/img/video_1.jpg',
                video: 'https://www.youtube.com/embed/SjGZoALjiLQ'

            },
            {

                thumb: 'assets/img/video_2.jpg',
                video: 'https://www.youtube.com/embed/emel6lFmYPI'

            },
            {

                thumb: 'assets/img/video_3.jpg',
                video: 'https://www.youtube.com/embed/SYAojqkcYzw'

            },
            {

                thumb: 'assets/img/video_4.jpg',
                video: 'https://www.youtube.com/embed/y6HgGV0QhlE'

            },
            {

                thumb: 'assets/img/video_5.jpg',
                video: 'https://www.youtube.com/embed/Zs3qY0wts1c'

            },
            {

                thumb: 'assets/img/video_6.jpg',
                video: 'https://www.youtube.com/embed/-L1FpZ6gprI'

            }

        ];


        var getVideos = function () {

            return videos;

        };


        var getImages = function () {

            return images;

        };


        return {

            getVideos: getVideos,
            getImages: getImages

        };

    });

})();