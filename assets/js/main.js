// ==========preloader js area=========//
$(window).on("load", function(){
  $(".preloader-container").fadeOut();
  $("#exampleModalCenter-1").modal("show");
  
});
// ==========preloader js area=========//
$(".close").click(function(){
  $("#exampleModalCenter-1").modal("hide");
});

// ===countdown js===
$('.offer-countdown').countdown('2025/01/01', function(event) {
  $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
  $(this).html(event.strftime('<div class="countdown-single-box"><span class="countdown-single-box-amount">%D</span><span class="countdown-single-box-period">Days</span></div> <div class="countdown-single-box"><span class="countdown-single-box-amount">%H</span><span class="countdown-single-box-period">Hours</span></div> <div class="countdown-single-box"><span class="countdown-single-box-amount">%M</span><span class="countdown-single-box-period">Mins</span></div> <div class="countdown-single-box"><span class="countdown-single-box-amount">%S</span><span class="countdown-single-box-period">Sec</span></div>'))
});
// ===countdown js===
// map js===
function initMap() {
  var location = {lat: -25.363, lng:131.044};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center:location
  });
}
// map js===
// news slider====
$(".news-slider").vTicker({
  speed: 500,
  pause: 3000,
  animation: "fade",
  mousePause: false,
  showItems: 1
});
// news slider====

// quickview slider====
$('#exampleModalCenter').on('shown.bs.modal', function () {
  $('.zoom-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    infinite: true,
    asNavFor: '.zoom-img-nav',
  }); 
});
// quickview slider====
$('#exampleModalCenter').on('shown.bs.modal', function () {
  $('.zoom-img-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.zoom-img-slider',
    dots: false,
    arrows: true,
    prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
    nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
    focusOnSelect: true,
  });
});
// quickview slider====

// tab show===
$('#myTab').on('click', 'a', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
// tab show===

$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.header-bottom-part').addClass('sticky');
  } else{
      $('.header-bottom-part').removeClass('sticky');
  }
});
$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.slicknav_nav').addClass('sticky');
  } else{
      $('.slicknav_nav').removeClass('sticky');
  }
});
$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.slicknav_btn').addClass('sticky');
  } else{
      $('.slicknav_btn').removeClass('sticky');
  }
});

$('.homepage-slider').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  autoplay: true,
  arrows: true,
  prevArrow: '<i class="bx bx-chevron-left"></i>',
  nextArrow: '<i class="bx bx-chevron-right"></i>',
  slidesToShow: 1,
  slidesToScroll: 1,
});
// featured
$('.featured-slider').owlCarousel({
  loop:true,
  margin:0,
  dots:false,
  nav:true,
  navText:["<i class='bx bx-arrow-back'></i>","<i class='bx bx-arrow-back'></i>"],
  responsive:{
      0:{
          items:2,
          nav:false,
      },
      375:{
          items:2,
          nav:false,
      },
      480:{
          items:3,
          nav:false,
      },
      768:{
          items:4
      },
      1024:{
          items:4
      },
      1025:{
          items:10
      }
  },
});
// featured

// categories-slider
$('.categories-slider').owlCarousel({
  loop:true,
  margin: 0,
  dots:false,
  nav:true,
  navText:["<i class='bx bx-arrow-back'></i>","<i class='bx bx-arrow-back'></i>"],
  responsive:{
      0:{
          items:1
      },
      375:{
          items:2,
          nav:false,
      },
      480:{
          items:3,
          nav:false,
      },
      481:{
          items:3
      },
      767:{
          items:3
      },
      768:{
          items:4
      },
      1024:{
          items:4
      },
      1119:{
          items:8
      }
  },
});
// categories-slider


// wow js===

new WOW().init();

// wow js====

// back to top area=====

$(window).scroll(function(){
  if($(this).scrollTop() > 150) {
    $('#scroll').addClass('scroll-show');
  }else{
    $('#scroll').removeClass('scroll-show');
  }
});

$('#scroll').click(function(){
  $('html, body').animate({
    scrollTop: 200
  }, 1000)
});

// back to top area ======

// detail slider====
  $('.zoom-img-sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.zoom-img-navs',
  }); 
// detail slider====
  $('.zoom-img-navs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.zoom-img-sliders',
    dots: false,
    arrows: true,
    prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
    nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
    focusOnSelect: true,
  });
// detail slider====

// ======product-slider======
$('.product-wrap-slider').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
  nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
});
// ======product-slider======

// ddd===dddd
// var a_parent =  document.querySelectorAll(".menu-item-list");
// var dd_menu_a = document.querySelectorAll(".dd-expand");

// a_parent.forEach(function(aitem){

// 		aitem.addEventListener("click", function(){
// 			a_parent.forEach(function(aitem){
// 				aitem.classList.remove("active");
// 			})
// 			dd_menu_a.forEach(function(dd_menu_item){
// 				dd_menu_item.classList.remove("active");
// 			})
// 			aitem.classList.add("active");
// 		});
// });

// dd_menu_a.forEach(function(dd_menu_item){

// 		dd_menu_item.addEventListener("click", function(){
// 			dd_menu_a.forEach(function(dd_menu_item){
// 				dd_menu_item.classList.remove("active");
// 			})
// 			dd_menu_item.classList.add("active");
// 		});
// });
// dddd====ddd
// ======welcome-slider======
$('.welcome-slider').slick({
  infinite: true,
  margin: 10,
  arrows: true,
  prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
  nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
});
// ======welcome-slider======

// ===========triggger menu js area===========
$(function(){
  $('#menu2').slicknav({
    label: 'Categories',
  });
});
// ===========triggger menu js area===========

// counterup ===
$('.count').counterUp({
  delay:10,
  time:1000
});
// counterup ===
// counterup ===
$('.counts').counterUp({
  delay:10,
  time:1000
});
// counterup ===

// range = slider==
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 2000,
    values: [ 300, 1500 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ]);
      $( "#amount2" ).val( "$" + ui.values[ 1 ]);
    }
  });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));
  });
// range = slider==

// let toggle = document.querySelector(".toggle");
// let navBar = document.querySelector(".nav-bar");


// toggle.addEventListener("click", () => {
//   if(navBar.style.display === "block"){
//     navBar.style.display = "none";
//   } else{
//   navBar.style.display = "block";
// }
// });

$('.drop-down').click(function(e) {
  e.preventDefault();
  $('ul').removeClass('active');
  $('ul').addClass('active');
});
// dropdown==


// mobile dropdown menu==
var $offCanvasNav = $(".mobile-menu"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".dropdown");
    
$offCanvasNav.on("click", "li a, li .expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-list|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });

// mobile dropdown menu==

$("#select-dropdown-opt").click(function(){
  $("#select-dropdown").toggleClass("open");
});
$("#location-dropdown-opt").click(function(){
  $("#location-dropdown").toggleClass("open");
});
$(".country-select").click(function(){
  $("#country-option").toggleClass("opens");
});
$(".country-select").click(function(){
  $("#country-options").toggleClass("openss");
});

$("#more-cate-btn").click(function(){
  $("#more-cate-open").toggleClass("showed");
  $("#dropdown-main-categories").toggleClass("showed");
});
$("#side-more-cate-btn").click(function(){
  $("#side-more-cate-open").toggleClass("showed");
});
$(".mobile-burger-menu").click(function(){
  $(".mobile-navbar-area").addClass("burger");
  $(".body-overlay").addClass("burger");
});
$(".mobile-menu-close, .body-overlay").click(function(){
  $(".mobile-navbar-area").removeClass("burger");
  $(".body-overlay").removeClass("burger");
});
$("#main-categories-box").click(function(){
  $("#dropdown-main-categories").toggleClass("shown");
});
$("#select-sort-box").click(function(){
  $("#show-select").toggleClass("show");
});
$("#featured-sort-box").click(function(){
  $("#featured-select").toggleClass("show");
});
$(".collaps").click(function(){
  $(".login_form").toggleClass("show");
});

$(".creataccount1").click(function(){
  $(".create-account-input").toggleClass("show");
});
$(".differentaddress").click(function(){
  $(".ship-detail").toggleClass("open");
});

$(".shop-filter-toggle").click(function(){
  $(".shop-product-filter-boxed").toggleClass("open");
});

  $('.col-lg-22-5').theiaStickySidebar();
  $(".collapsed").click(function(){
    $(".collapse").collapse('toggle');
  });
  // detail slider====
  $('.zoom-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.zoom-img-nav',
  }); 
// detail slider====
  $('.zoom-img-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.zoom-img-slider',
    dots: false,
    arrows: true,
    prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
    nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
    focusOnSelect: true,
  });
// detail slider====