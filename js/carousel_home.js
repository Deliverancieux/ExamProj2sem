$(document).ready(function(){
  $('.carousel_container').slick({
      infinite: false,
      rows: 2,
      slidesPerRow: 5,
      responsive: [
    {
      breakpoint: 1400,
      settings: {
      infinite: false,
      rows: 2,
      slidesPerRow: 4,
      }
    },
    {
      breakpoint: 1100,
      settings: {
      infinite: false,
      rows: 2,
      slidesPerRow: 3,
      }
    },
    
    {
      breakpoint: 900,
      settings: {
      rows: 2,
      slidesPerRow: 3,
          centerMode:true,
          arrows: false,
          autoplay: true,
          infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
      rows: 2,
      slidesPerRow: 2,
          centerMode: true,
          arrows: false,
          autoplay: true,
          infinite: true,
      }
    }
    ]
  });
});