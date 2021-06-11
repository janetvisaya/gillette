import $ from 'jquery';
import 'slick-carousel';
export default function () {
    $(function () {
        homeCarousel();
    }); 

    function homeCarousel() {
        $('#homeCarousel').slick({
            dots: true,
            infinite: true,
            mobileFirst: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true
                    }
                }
            ]
        });
    }
}