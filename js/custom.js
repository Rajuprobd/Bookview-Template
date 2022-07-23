
(function ($) {

  "use strict";
  /*------------ Start popup script text-------------*/
  $("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

  /*------------ End popup script text-------------*/

  // WOW JS
  $(window).on('load', function () {
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: 'wow',      // Animated element css class (default is wow)
        animateClass: 'animated', // Animation css class (default is animated)
        offset: 20,         // Distance to the element when triggering the animation (default is 0)
        mobile: true,       // Trigger animations on mobile devices (default is true)
        live: true,       // Act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  });

    
  /*-------------------Start slider script code------------------*/
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      }
    }
  };

  var swiper = new Swiper(".swiper-container", swiperOptions);
  /*------------------End slider script code-----------------*/

  /*---------------Start header script text------------------*/

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }
  /*---------------End header script text------------------*/

  /*----------------Start filter script text------------------*/
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  /*----------------End filter script text------------------*/


  /*--------Start Scroll To id  Script text--------*/

  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    } /* speed */);
  });
  function visible(partial) {
    var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

  }

  /*--------End Scroll To id  Script text--------*/

  //=======================Start back to top btn js========================//
  $(window).on("scroll", function () {
    var e = $(window).scrollTop();
    e > 600 && $(".go-top").addClass("active"), e < 600 && $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({
      scrollTop: "0"
    }, 500)
  });
  //=======================End back to top btn js========================//



})(window.jQuery);