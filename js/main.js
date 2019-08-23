$(".page-scroll").click(function() {
  $(".nav-toggle").removeClass("active");
  $(".nav_main").removeClass("open");
  $("body").removeClass("nav_open");
});


$('body').scrollspy({target: "", offset:60}); 
$('a[href^="#"]').on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;
  
  $('html, body').stop().animate({
    scrollTop: $( $(this).attr('href') ).offset().top - 55
  }, 600);
  window.location.hash = hash;
  
  
  }  // End if
});







$(document).ready(function() {
/* When user clicks the Icon */
$(".nav-toggle").click(function() {
    $(this).toggleClass("active");
    $(".nav_main").toggleClass("open");
    $("body").toggleClass("nav_open");
});




  

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".intervent_list ul li").click(function(){
        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
        //strange
    });
    $(".partenaires_con ul li").click(function(){
        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
        //strange
    });
}
});







/*----------btm-top js start------------*/
            $(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});
/*----------btm-top js End------------*/





jQuery(document).ready(function($) {
      $('.WorkSlider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
           }
        }]
    });
});

jQuery(document).ready(function($) {
      $('.CustomerSlider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    });
});




