$(document).ready(function(){
  $('.carousel_container').slick({
      infinite: true,
      slidesToShow: 5,
      autoplay: true,
      responsive: [
    {
      breakpoint: 1400,
      settings: {
      infinite: true,
      slidesToShow: 4,
          autoplay: true,
      }
    },
    {
      breakpoint: 1100,
      settings: {
      infinite: true,
      slidesToShow: 3,
          autoplay: true,
      }
    },
    
    {
      breakpoint: 900,
      settings: {
      slidesToShow: 2,
          centerMode:true,
          arrows: false,
          autoplay: true,
          infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
          centerMode: true,
          arrows: false,
          autoplay: true,
          infinite: true,
      }
    }
    ]
  });
});