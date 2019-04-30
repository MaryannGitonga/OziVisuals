 function initOzi() {
   "use strict";
   $(".loader-wrap").fadeOut(200, function() {
     $("#main").animate({
       opacity: "1"
     }, 500);
   });
   // Background image
   var a = $(".bg");
   a.each(function(a) {
     if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
   });
   // Clone
   $.fn.duplicate = function(a, b) {
     var c = [];
     for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
     return this.pushStack(c);
   };
   $("<div class='sb-button_point fl-wrap'></div>").duplicate(3).appendTo(".sb-button");
   // Scroll nav
   $(".scroll-init  ul ").singlePageNav({
     filter: ":not(.external)",
     updateHash: false,
     offset: 94,
     threshold: 120,
     speed: 1200,
     currentClass: "act-scrlink"
   });
   // Text rotator
   $.fn.extend({
     rotaterator: function(options) {
       var defaults = {
         fadeSpeed: 500,
         pauseSpeed: 100,
         child: null
       };
       var options = $.extend(defaults, options);

       return this.each(function() {
         var o = options;
         var obj = $(this);
         var items = $(obj.children(), obj);
         items.each(function() {
           $(this).hide();
         })
         if (!o.child) {
           var next = $(obj).children(':first');
         } else {
           var next = o.child;
         }
         $(next).fadeIn(o.fadeSpeed, function() {
           $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
             var next = $(this).next();
             if (next.length == 0) {
               next = $(obj).children(':first');
             }
             $(obj).rotaterator({
               child: next,
               fadeSpeed: o.fadeSpeed,
               pauseSpeed: o.pauseSpeed
             });
           })
         });
       });
     }
   });
   $('.hero-decor-let').rotaterator({
     fadeSpeed: 500,
     pauseSpeed: 3500
   });
   // Sliders
   if ($(".multi-slideshow_1").length > 0) {
     var ms1 = new Swiper(".multi-slideshow_1 .swiper-container", {
       preloadImages: false,
       loop: true,
       speed: 1400,
       spaceBetween: 0,
       effect: "slide",
       autoplay: {
         delay: 3500,
         disableOnInteraction: false
       },
     });
     var ms2 = new Swiper(".multi-slideshow_2 .swiper-container", {
       preloadImages: false,
       loop: true,
       speed: 1400,
       spaceBetween: 0,
       direction: "vertical",
       effect: "slide",
     });
     var ms3 = new Swiper(".multi-slideshow_3 .swiper-container", {
       preloadImages: false,
       loop: true,
       speed: 1400,
       spaceBetween: 0,
       effect: "slide",
     });
     ms1.controller.control = ms2;
     ms2.controller.control = ms1;
     ms2.controller.control = ms3;
     ms3.controller.control = ms2;
     kpsc();
     ms1.on("slideChangeTransitionStart", function() {
       eqwe();
     });
     ms1.on("slideChangeTransitionEnd", function() {
       kpsc();
     });
   }
   if ($(".multi-slideshow_fs").length > 0) {
     var ms1 = new Swiper(".multi-slideshow_fs .swiper-container", {
       preloadImages: false,
       loop: true,
       speed: 1400,
       spaceBetween: 0,
       effect: "fade",
       autoplay: {
         delay: 3500,
         disableOnInteraction: false
       },
     });
     kpsc();
     ms1.on("slideChangeTransitionStart", function() {
       eqwe();
     });
     ms1.on("slideChangeTransitionEnd", function() {
       kpsc();
     });
   }

   function kpsc() {
     $(".slide-progress").css({
       width: "100%",
       transition: "width 3000ms"
     });
   }

   function eqwe() {
     $(".slide-progress").css({
       width: 0,
       transition: "width 0s"
     });
   };

   function setUpCarouselSlider() {
     $('.fw-carousel .swiper-wrapper').addClass('no-horizontal-slider');
     if ($(".fw-carousel").length > 0) {
       if ($(window).width() >= 640 && j2 == undefined) {
         var totalSlides2 = $(".fw-carousel .swiper-slide").length;
         var mouseContr = $(".fw-carousel").data("mousecontrol");
         var j2 = new Swiper(".fw-carousel .swiper-container", {
           preloadImages: false,
           loop: false,
           freeMode: true,
           slidesPerView: 'auto',
           spaceBetween: 10,
           grabCursor: true,
           mousewheel: mouseContr,
           speed: 1400,
           direction: "horizontal",
           scrollbar: {
             el: '.hs_init',
             draggable: true,
           },
           effect: "slide",
           pagination: {
             el: '.fw-carousel-counter',
             type: 'fraction',
             renderFraction: function(currentClass) {
               return '<span class="' + currentClass + '"></span>' + '' + '<span class="j2total">' + totalSlides2 + '</span>';
             }
           },
           navigation: {
             nextEl: '.fw-carousel-button-next',
             prevEl: '.fw-carousel-button-prev',
           },
           on: {
             resize: function() {
               if ($(window).width() < 640) {
                 j2.update();
               }
             },
           }
         });
         $(".fw-carousel.thumb-contr .swiper-slide img").each(function() {
           var ccasdc = $(this).attr("src");
           $("<div class='thumb-img'><img src='" + ccasdc + "'></div>").appendTo(".thumbnail-wrap");
         });
         $(".thumb-img").on('click', function() {
           j2.slideTo($(this).index(), 500);
           hideThumbnails();
         });
       }

       if ($(window).width() < 640 && j2 !== undefined) {
         j2.destroy();
         j2 = undefined;
         $('.fw-carousel .swiper-wrapper').removeAttr('style').addClass('no-horizontal-slider');
         $('.swiper-slide').removeAttr('style');

       }
     }
   }
   setUpCarouselSlider();
   if ($(".fs-slider").length > 0) {
     var mouseContr2 = $(".fs-slider").data("mousecontrol2");
     var j3 = new Swiper(".fs-slider .swiper-container", {
       preloadImages: false,
       loop: true,
       grabCursor: true,
       speed: 1400,
       spaceBetween: 0,
       effect: "slide",
       mousewheel: mouseContr2,
       pagination: {
         el: '.hero-slider-wrap_pagination',
         clickable: true,
       },
       navigation: {
         nextEl: '.hero-slider-button-next',
         prevEl: '.hero-slider-button-prev',
       },
       autoplay: {
         delay: 2500,
         disableOnInteraction: false
       },
       on: {
         init: function() {
           var fsslideract = $(".fs-slider .swiper-slide-active").data("fsslideropt1"),
             fsslideract2 = $(".fs-slider .swiper-slide-active").data("fsslideropt2"),
             fsslideract3 = $(".fs-slider .swiper-slide-active").data("fsslideropt3"),

             fsslideurl = $(".fs-slider .swiper-slide-active").data("fssurl");


           $(".opt-one").html(fsslideract);
           $(".opt-two").html(fsslideract2);
           $(".opt-three").html(fsslideract3);
           $(".hero-slider_details_url").attr("href", fsslideurl);
         },
       }
     });

     j3.on("slideChangeTransitionStart", function() {
       sliderDetailsChangeStart();
     });
     j3.on("slideChangeTransitionEnd", function() {
       sliderDetailsChangeEnd();
     });
     j3.on('slideChange', function() {
       var csli = j3.realIndex + 1,
         curnum = $('#current');
       TweenMax.to(curnum, 0.2, {
         force3D: true,
         y: -10,
         opacity: 0,
         ease: Power2.easeOut,
         onComplete: function() {
           TweenMax.to(curnum, 0.1, {
             force3D: true,
             y: 10
           });
           curnum.html(csli);
         }
       });
       TweenMax.to(curnum, 0.2, {
         force3D: true,
         y: 0,
         delay: 0.3,
         opacity: 1,
         ease: Power2.easeOut
       });
     });
     var totalSlides = j3.slides.length - 2;
     $('#total').html(totalSlides);
   }
   var sliderDetailsItem = $(".hero-slider_details li");

   function sliderDetailsChangeStart() {
     TweenMax.to(sliderDetailsItem, 0.8, {
       force3D: true,
       y: "-30px",
       opacity: "0",
       ease: Power2.easeOut,
       onComplete: function() {

         TweenMax.to(sliderDetailsItem, 0.1, {
           force3D: true,
           y: "30px",
           ease: Power2.easeOut,

         });
         var fsslideract = $(".fs-slider .swiper-slide-active").data("fsslideropt1"),
           fsslideract2 = $(".fs-slider .swiper-slide-active").data("fsslideropt2"),
           fsslideract3 = $(".fs-slider .swiper-slide-active").data("fsslideropt3"),
           fsslideurl = $(".fs-slider .swiper-slide-active").data("fssurl");
         $(".opt-one").html(fsslideract);
         $(".opt-two").html(fsslideract2);
         $(".opt-three").html(fsslideract3);
         $(".hero-slider_details_url").attr("href", fsslideurl);
       }
     });
   }

   function sliderDetailsChangeEnd() {
     sliderDetailsItem.each(function(ace) {
       var bp2 = $(this);
       setTimeout(function() {
         TweenMax.to(bp2, 0.6, {
           force3D: true,
           y: "0",
           opacity: "1",
           ease: Power2.easeOut
         });
       }, 110 * ace);
     });
   }
   if ($(".fs-slider2").length > 0) {
     $(".fs-slider2.thumb-contr .swiper-slide .bg").each(function() {
       var ccasdc3 = $(this).attr("data-bg");
       $("<div class='thumb-img'><img src='" + ccasdc3 + "'></div>").appendTo(".thumbnail-wrap");
     });
     $(".thumb-img").on('click', function() {
       fsSlider2.slideTo($(this).index() + 1, 500);
       hideThumbnails();
     });
     var mouseContr2 = $(".fs-slider2").data("mousecontrol2");
     var totalSlides2 = $(".fs-slider2 .swiper-slide").length;
     var fsSlider2 = new Swiper(".fs-slider2 .swiper-container", {
       preloadImages: false,
       loop: true,
       grabCursor: true,
       speed: 1400,
       spaceBetween: 0,
       effect: "slide",
       mousewheel: mouseContr2,
       pagination: {
         el: '.fw-carousel-counter',
         type: 'fraction',
         renderFraction: function(currentClass) {
           return '<span class="' + currentClass + '"></span>' + '' + '<span class="j2total">' + totalSlides2 + '</span>';
         }
       },
       autoplay: {
         delay: 3500,
         disableOnInteraction: false
       },
       navigation: {
         nextEl: '.ss-slider-cont-next',
         prevEl: '.ss-slider-cont-prev',
       },
     });
   }

   function showfs() {
     $("#wrapper").addClass("fs-mode-active");

     TweenMax.to($(".bottom-panel"), 0.3, {
       force3D: true,
       bottom: "-100px",
       ease: Power2.easeOut
     });
     TweenMax.to($("header.main-header"), 0.3, {
       force3D: true,
       top: "-100px",
       ease: Power2.easeOut,
       onComplete: function() {
         TweenMax.to($(".close-fs"), 0.8, {
           force3D: true,
           bottom: 0,
         });

       }
     });
   }

   function hidefs() {
     $("#wrapper").removeClass("fs-mode-active");
     TweenMax.to($(".bottom-panel"), 0.3, {
       force3D: true,
       bottom: "0",
       ease: Power2.easeOut
     });
     TweenMax.to($("header.main-header"), 0.3, {
       force3D: true,
       top: "0",
       ease: Power2.easeOut
     });

     TweenMax.to($(".close-fs"), 0.8, {
       force3D: true,
       bottom: "-100px",
     });

   }
   $(".fs-mode").on("click", function() {
     showfs();
     return false;
   });
   $(".close-fs").on("click", function() {
     hidefs();
     return false;
   });
   var thumbcont = $(".thumbnail-container"),
     thumbItrm = $(".thumb-img"),
     stbtn = $(".show_thumbnails");

   function showThumbnails() {
     TweenMax.to(thumbcont, 1.0, {
       force3D: true,
       right: 0,
       ease: Expo.easeInOut,
       onComplete: function() {
         thumbItrm.addClass("visthumbnails");
         thumbcont.addClass("visthumbnails");
       }
     });
     stbtn.removeClass("unvisthum");
     hideDetails();
   }

   function hideThumbnails() {
     thumbItrm.removeClass("visthumbnails");
     TweenMax.to(thumbcont, 1.0, {
       force3D: true,
       delay: 0.2,
       left: "100%",
       ease: Expo.easeInOut,
       onComplete: function() {
         TweenMax.to(thumbcont, 0.1, {
           force3D: true,
           left: 0,
           right: "100%",
           ease: Expo.easeInOut


         });
         thumbcont.removeClass("visthumbnails");
       }

     });
     stbtn.addClass("unvisthum");
   }
   stbtn.on("click", function() {
     if ($(this).hasClass("unvisthum")) showThumbnails();
     else hideThumbnails();
   });

   function showDetails() {
     $(".det-overlay").fadeIn(400);
     TweenMax.to($(".hid-det-anim"), 0.4, {
       force3D: true,
       left: 0,
       ease: Power2.easeOut,
       onComplete: function() {
         $(".det-anim").each(function(ab) {
           var bp3 = $(this);
           setTimeout(function() {
             TweenMax.to(bp3, 0.6, {
               force3D: true,
               y: "0",
               opacity: "1",
               ease: Power2.easeOut
             });
           }, 110 * ab);
         });
       }

     });
     $(".shibtn").removeClass("unvisthum2");
     hideThumbnails();
   }

   function hideDetails() {
     $(".det-overlay").fadeOut(400);
     TweenMax.to($(".hid-det-anim"), 0.4, {
       force3D: true,
       left: "-650px",
       ease: Power2.easeOut,
       onComplete: function() {
         TweenMax.to($(".det-anim"), 0.1, {
           force3D: true,
           y: "50",
           opacity: "0",
           ease: Power2.easeOut
         });
       }
     });
     $(".shibtn").addClass("unvisthum2");
   }
   $(".shibtn").on("click", function() {
     if ($(this).hasClass("unvisthum2")) showDetails();
     else hideDetails();
   });

   $(".act-closedet").on("click", function() {
     hideDetails();
   });
   $(".initscroll").niceScroll({
     cursorwidth: "0",
     cursorborder: "none",
     cursorborderradius: "0px",
     scrollspeed: 10,
     mousescrollstep: 40,
     hwacceleration: true,
   });
   if ($(".testilider").length > 0) {
     var j2 = new Swiper(".testilider .swiper-container", {
       preloadImages: false,
       slidesPerView: 2,
       spaceBetween: 20,
       loop: true,
       grabCursor: true,
       mousewheel: false,
       navigation: {
         nextEl: '.ss-slider-next',
         prevEl: '.ss-slider-prev',
       },
       breakpoints: {
         640: {
           slidesPerView: 1,
         },

       }
     });
   }
   if ($(".single-slider").length > 0) {
     var j2 = new Swiper(".single-slider .swiper-container", {
       preloadImages: false,
       slidesPerView: 1,
       spaceBetween: 0,
       loop: true,
       autoHeight: true,
       grabCursor: false,
       mousewheel: false,
       pagination: {
         el: '.ss-slider-pagination',
         clickable: true,
       },
       navigation: {
         nextEl: '.ss-slider-cont-next',
         prevEl: '.ss-slider-cont-prev',
       },
     });
   }
   // Isotope
   function inithorizontalPortfolio() {
     if ($("#portfolio_horizontal_container").length) {
       var d = $("#portfolio_horizontal_container");
       d.imagesLoaded(function(a, b, e) {
         var f = {
           itemSelector: ".portfolio_item",
           layoutMode: "packery",
           packery: {
             isHorizontal: true,
             gutter: 0
           },
           resizable: true,
           transformsEnabled: true,
           transitionDuration: "700ms"
         };
         var g = {
           itemSelector: ".portfolio_item",
           layoutMode: "packery",
           packery: {
             isHorizontal: false,
             gutter: 0
           },
           resizable: true,
           transformsEnabled: true,
           transitionDuration: "700ms"
         };
         if ($(window).width() < 778) {
           d.isotope(g);
           d.isotope("layout");
           d.removeAttr('style');
           $(".horizontal-grid-wrap").getNiceScroll().remove();
         } else {
           d.isotope(f);
           d.isotope("layout");
           $(".horizontal-grid-wrap").niceScroll({
             cursorwidth: "6px",
             cursorborder: "none",
             cursorborderradius: "0px",
             touchbehavior: true,
             autohidemode: false,
             cursorcolor: "#292929",
             bouncescroll: false,
             scrollspeed: 120,
             mousescrollstep: 90,
             grabcursorenabled: true,
             horizrailenabled: true,
             preservenativescrolling: true,
             cursordragontouch: false,
             railpadding: {
               top: -20,
               right: 0,
               left: 0,
               bottom: 0
             }
           });
         }
         $(".gallery-filters").on("click", "a", function(a) {
           a.preventDefault();
           var b = $(this).attr("data-filter");
           d.isotope({
             filter: b
           });
           $(".gallery-filters a").removeClass("gallery-filter-active");
           $(this).addClass("gallery-filter-active");
         });
         d.isotope("on", "layoutComplete", function(a, b) {
           var b = a.length,
             numalb = $(".num-album");
           TweenMax.to(numalb, 0.2, {
             force3D: true,
             y: -10,
             opacity: 0,
             ease: Power2.easeOut,
             onComplete: function() {
               TweenMax.to(numalb, 0.1, {
                 force3D: true,
                 y: 10
               });
               numalb.html(b);
             }
           });
           TweenMax.to(numalb, 0.2, {
             force3D: true,
             y: 0,
             delay: 0.3,
             opacity: 1,
             ease: Power2.easeOut
           });
         });
         var j = $(".portfolio_item").length;
         $(".all-album , .num-album").html(j);
       });
     }
   }
   inithorizontalPortfolio();
   $(".filter-title").on("click", function() {
     if ($(window).width() < 1064) {
       $(".gallery-filters").slideToggle(100);
     }
   });

   function n() {
     if ($(".gallery-items").length) {
       var $grid = $(".gallery-items").isotope({
         singleMode: true,
         columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
         itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
         resizable: true,
         transformsEnabled: true,
         transitionDuration: "700ms"
       });
       $grid.imagesLoaded(function() {
         $grid.isotope("layout");
       });
       $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
         b.preventDefault();
         var c = $(this).attr("data-filter");
         $grid.isotope({
           filter: c
         });
         $(".gallery-filters a").removeClass("gallery-filter-active");
         $(this).addClass("gallery-filter-active");
       });
       $grid.isotope("on", "layoutComplete", function(a, b) {
         var b = a.length,
           numalb2 = $(".num-album");

       });
       var b = $(".gallery-item").length;
       $(".all-album , .num-album").html(b);
     }
   }
   n();
   // lightGallery
   $(".image-popup").lightGallery({
     selector: "this",
     cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
     download: false,
     counter: false
   });
   var o = $(".lightgallery"),
     p = o.data("looped");
   o.lightGallery({
     selector: ".lightgallery a.popup-image",
     cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
     download: false,
     loop: true,
     counter: false
   });
   // Appear
   $(".stats").appear(function() {
     $(".num").countTo();
   });
   $(".skillbar-box").appear(function() {
     $(this).find("div.skillbar-bg").each(function() {
       $(this).find(".custom-skillbar").delay(600).animate({
         width: $(this).attr("data-percent")
       }, 1500);
     });
   });

   // Contact form

   // scroll to
   $(".custom-scroll-link").on("click", function() {
     var a = $(".main-header").height();
     if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
       var b = $(this.hash);
       b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
       if (b.length) {
         $("html,body").animate({
           scrollTop: b.offset().top - a
         }, {
           queue: false,
           duration: 1200,
           easing: "easeInOutExpo"
         });
         return false;
       }
     }
   });
   $(".to-top").on("click", function(a) {
     a.preventDefault();
     $("html, body").animate({
       scrollTop: 0
     }, 800);
     return false;
   });
   // CSS
   function csselem() {
     $(".slideshow-container .slideshow-item").css({
       height: $(".slideshow-container").outerHeight(true)
     });
     $(".fs-slider-item").css({
       height: $(".fs-slider").outerHeight(true)
     });
     $(".fs-slider-item ").css({
       height: $(".fs-slider").outerHeight(true)
     });
     $(".ms_item").css({
       height: $(".multi-slideshow_1").outerHeight(true)
     });
     $(".ms_item2").css({
       height: $(".multi-slideshow_2").outerHeight(true)
     });
     $(".ms_item3").css({
       height: $(".multi-slideshow_3").outerHeight(true)
     });
     $(".ms-item_fs").css({
       height: $(".multi-slideshow_fs").outerHeight(true)
     });
     $(".half-slider-img-item").css({
       height: $(".half-slider-img").outerHeight(true)
     });
     $(".horizontal-grid-wrap").css({
       height: $(".hor-content_padd").outerHeight(true) - 92 + "px"
     });

     $(" #portfolio_horizontal_container .portfolio_item img  ").css({
       height: $(".portfolio_item").outerHeight(true)
     });
   }
   csselem();
   $(".nav-button-wrap").on("click", function() {
     $(".main-menu").toggleClass("vismobmenu");
   });
   $(".search-button").on("click", function() {
     $(".search-input").slideToggle(700);
   });

   function mobMenuInit() {
     var ww = $(window).width();
     if (ww < 1064) {
       $(".menusb").remove();
       $(".main-menu").removeClass("nav-holder");
       $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
       $(".menusb").menu();
     } else {
       $(".menusb").remove();
       $(".main-menu").addClass("nav-holder");
     }
   }
   mobMenuInit();
   // css
   $(window).on("resize", function() {
     csselem();
     inithorizontalPortfolio();
     mobMenuInit();
     setUpCarouselSlider();
   });
   $("#menu").menu();
   var mouse = {
     x: 0,
     y: 0
   };
   var pos = {
     x: 0,
     y: 0
   };
   var ratio = 0.15;
   var active = false;
   var ball = document.querySelector('.element-item');
   TweenLite.set(ball, {
     xPercent: -50,
     yPercent: -50
   });
   document.addEventListener("mousemove", mouseMove);

   function mouseMove(e) {
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     mouse.x = e.pageX;
     mouse.y = e.pageY - scrollTop;
   }
   TweenMax.ticker.addEventListener("tick", updatePosition);

   function updatePosition() {
     if (!active) {
       pos.x += (mouse.x - pos.x) * ratio;
       pos.y += (mouse.y - pos.y) * ratio;
       TweenMax.set(ball, {
         x: pos.x,
         y: pos.y
       });
     }
   }
   $("a , .btn , textarea, input , .single-carousel-control_list li").on({
     mouseenter: function() {
       TweenMax.to('.element-item ', 0.4, {
         borderColor: 'transparent',
         scale: 0.5,
         background: "rgba(0,0,0,0.2)",
         left: 0,
         top: 0
       });
     },
     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         borderColor: '#000',
         scale: 1.0,
         background: "none"
       });
     }
   });
   $(".sb-button , .share-btn , .fs-mode , .fw_cb , .closedet_style , .single-carousel_arrow").on({
     mouseenter: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '45px 45px',
         borderWidth: '1px',
         scale: 1.8,
         left: 23,
         top: 23
       });
     },
     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '30px 30px',
         borderWidth: '2px',
         scale: 1.0,
         left: 0,
         top: 0
       });
     }
   });
   $(".swiper-container , .horizontal-grid-wrap").on({
     mouseenter: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '35px 35px',
         borderWidth: '1px',
         borderColor: '#fff',
         scale: 1.8,
         left: 23,
         top: 23
       });
       $(".element-item").addClass("swipericon");
     },
     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '30px 30px',
         borderWidth: '2px',
         borderColor: '#000',
         scale: 1.0,
         left: 0,
         top: 0
       });
       $(".element-item").removeClass("swipericon");
     }
   });
   $(".swiper-container a.box-media-zoom , .horizontal-grid-wrap .thumb-info a , .horizontal-grid-wrap a.box-media-zoom , .fs-slider_align_title a , .swiper-link").on({

     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '35px 35px',
         borderWidth: '1px',
         borderColor: '#fff',
         scale: 1.8,
         left: 23,
         top: 23
       });
     }
   });
   $(".sb-overlay , .det-overlay ").on({
     mouseenter: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '35px 35px',
         borderWidth: '1px',
         borderColor: '#fff',
         scale: 1.8,
         left: 23,
         top: 23
       });
       $(".element-item").addClass("closeicon");
     },
     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         transformOrigin: '30px 30px',
         borderWidth: '2px',
         borderColor: '#000',
         scale: 1.0,
         left: 0,
         top: 0
       });
       $(".element-item").removeClass("closeicon");
     }
   });
   $(".gallery-item , .column-image").on({
     mouseenter: function() {
       TweenMax.to('.element-item ', 0.4, {
         borderColor: 'rgba(255,255,255,0.7)'
       });
     },
     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         borderColor: '#000'
       });
     }
   });
   $(".gallery-item   .box-media-zoom , .gallery-item .thumb-info").on({
     mouseleave: function() {
       TweenMax.to('.element-item ', 0.4, {
         borderColor: 'rgba(255,255,255,0.7)'
       });
     }
   });
   $(".thumb-info a").on("click", function() {
     var a = $(this).attr("href");
     window.location.href = a;
     return false;
   });
 }

 // Init all functions
 $(window).on("load", function() {
   initOzi();
 });
