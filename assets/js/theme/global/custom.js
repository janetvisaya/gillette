import $ from 'jquery';
import 'slick-carousel';
export default function () {
    $(function () {
        homeCarousel();
        menu();
        bannerTop();
        initEvents();
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

    function menu() {
        let isMobile = () => {
            return window.innerWidth < 801;
        };
        let dimBody = () => {
            $("body").toggleClass("dim");
        }
        let toggleSubMenu = (el)=> {
            if (!isMobile()) {
                $(el.currentTarget).find(".navPage-subMenu").toggleClass("is-open");
                dimBody();
            }
        }

        $(document)
            .on("mouseover", ".navPages-item.navPages-item-page", function (e) {
                toggleSubMenu(e);
            })
            .on("mouseout", ".navPages-item.navPages-item-page", function (e) {
                toggleSubMenu(e);
            });

        document.getElementById('nav-quick-search').addEventListener('blur', dimBody);
        document.getElementById('nav-quick-search').addEventListener('focus', dimBody);
    }

    function bannerTop() {
        $('[data-banner-carousel]').slick({
            "dots": false,
            "infinite": true,
            "mobileFirst": true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": false,
            "autoplay": true,
            "autoplaySpeed": 2000,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": 'unslick'
                }
            ]
        });
    }

    function initEvents() {
        window.addEventListener("resize", () => {
            $('[data-banner-carousel]').slick("refresh");
        });
    }
}