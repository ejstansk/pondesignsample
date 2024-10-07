$(function() {

    heroHeight();

    $(window).resize(function () {
      heroHeight();
    });
  
    function heroHeight() {
      var windowHeight = $(window).height();
      $(".p-hero").height(windowHeight);
    }
  
    $('a[href^="#"]').on("click", function () {
      var speed = 300;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top;
      $("html, body").animate(
        {
          scrollTop: position,
        },
        speed,
        "swing"
      );
      return false;
    });

    var btnMenu = $(".js-btn-menu");
    var globalNav = $(".p-global-nav");
  
    btnMenu.on("click", function () {
      btnMenu.toggleClass("is-active");
      globalNav.toggleClass("is-show");
    });

const swiper = new Swiper('.p-swiper', {

    autoplay: {
        delay: 4000,
      },
      speed: 500,
      loop: true,
      effect: "fade",
    

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {                       
        el: '.swiper-pagination',       
    },            
    scrollbar: {
        el: ".swiper-scrollbar",
      },                 

})

var $pageTop = $(".c-page-top");
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".l-header").addClass("is-active");
    } else {
      $(".l-header").removeClass("is-active");
    }
  });


});