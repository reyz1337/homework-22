$(document).ready(function(){
    $('.guitar__list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });     
$(document).ready(function(){
    $('.partners__list').slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});
