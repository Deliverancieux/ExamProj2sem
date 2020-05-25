$(document).ready(function(){
  $('.carousel_container').slick({
      infinite: false,
      rows: 2,
      slidesPerRow: 5,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
      infinite: false,
      rows: 2,
      slidesPerRow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
      infinite: false,
      rows: 2,
      slidesPerRow: 3,
          centerMode:true,
          accessibility: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
      infinite: false,
      rows: 2,
      slidesPerRow: 2,
          centerMode: true,
          accessibility: false,
      }
    }
    ]
  });
});