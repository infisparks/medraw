jQuery(document).ready(function($) {
  var templateUrl = $("#thetemplateurl").data("templateurl");
  fixedHeader();
  $("header .menuToggle").click(function () {
      menuToggle();
  });
  $("header, footer").on("click", ".menu-item-has-children", function (e) {
    console.log($(window).width())
    if ($(window).width() < 992) {
      e.stopPropagation()
      $(this).toggleClass("showMenu")
    }
  })
  
  //  $(window).on('load', function () {
  //   if (".enquiryModal") {
  //     if (!sessionStorage.formsent) {
  //       setTimeout(function () {
        
  //           var myModal = new bootstrap.Modal(
  //             document.getElementById("enquiryModal"), {}
  //           )
  //           myModal.show()
          
  //       }, 15000)
  //     }
  //   }
  // })





  
  
   $(window).on('load', function () {
    if (".advvideopopup") {
      if (!sessionStorage.formsent) {
        setTimeout(function () {
          if ($('body').hasClass("modal-open")) {

          } else {
            var myModal = new bootstrap.Modal(
              document.getElementById("advvideopopup"), {}
            )
            myModal.show()
          }
        }, 1000)
      }
    }
  })
   
  
 $('.counterNo .counters').counterUp({
    delay: 10,
    time: 1500
  });


  $(".scrolltotop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  }); 

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

  $('.teamLinkWithData').click(function(){
    var selectValue = $(this).data('content');
    // console.log(selectValue);
    $('.teamContentopen #modalImg').attr('src', selectValue);
    var myModal = new bootstrap.Modal(document.getElementById("teamContentopen"), {});
    myModal.show();
});


  



$('.bannerSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
 
});

$('.apiSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
    },
  },
],
});

$('.ourCredentialsSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
    },
  },
],
});

new WOW().init();

  $(document).on('click', '.jobsListing  .applyBtn', function(){
    var jobtitle = $(this).data('jobtitle');
    $('.jobModal #jobname').text(jobtitle);
    $('.jobModal #job-post').val(jobtitle);
    jQuery.noConflict();
    $('#jobModal').modal('show'); 

    // $('#jobModal').show();
    // var myModal = new bootstrap.Modal(
    //   document.getElementById("jobModal"),
    //   {}
    // )
    // const myModalAlternative = new bootstrap.Modal('#jobModal', {})
  });

  $('form').on('click', '.wpcf7-submit', function (e) {
    var code = $(this).parents('form').find('.selected-flag').attr('title');
    $(this).parents('form').find('#phonecode').val(code);
  });




// Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        if(window.innerWidth <= 991){
          setTimeout(function(){
            $('header .menuToggle.showMenu').click();
            // $('.navbar-toggler[aria-expanded="true"]').click();
          },600);
        }
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
});

const fixedHeader = () => {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("header").addClass("fixed_top");
      jQuery(".scrolltotop").removeClass("hide");
    } else {
      jQuery("header").removeClass("fixed_top");
      jQuery(".scrolltotop").addClass("hide");
    }
  });
  };
  
  const menuToggle = () => {
  jQuery("header .menuToggle").toggleClass("showMenu");
  jQuery("header .media-center").toggleClass("showMenu");
  };
  const menuClose = () => {
  jQuery("header .menuToggle").removeClass("showMenu");
  jQuery("header .media-center").removeClass("showMenu");
  };
  
  