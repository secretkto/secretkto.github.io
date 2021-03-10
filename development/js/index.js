$(document).ready(function () {
  inlineSVG.init({
    svgSelector: '.svg--inline',
  }, function () {
    console.log('All svg inlined');
  });

  let $videoHorizontalPlaceholder = $('.video--placeholder');
  let $videoHorizontal = $('.video--horizontal');
  let $menu = $('.menu');
  let $menuOpen = $('.img--hamburger');
  let $menuClose = $('.menu .img--close');
  let $modalOpen = $('.button--modal');
  let $modalClose = $('.modal .img--close');
  let $modal = $('.modal');
  let $faqItem = $('.faq .box--item');
  let $faqButton = $('.faq .button');
  let $header = $('.section--header');

  $videoHorizontalPlaceholder.click(function () {
    $(this).removeClass('isActive');
    $videoHorizontal.addClass('isActive');
  });
  $menuOpen.click(function () {
    $menu.toggleClass('isActive')
  });
  $menuClose.click(function () {
    $menu.removeClass('isActive')
  });
  $modalClose.click(function () {
    $modal.removeClass('isActive')
  });
  $modalOpen.click(function () {
    $modal.addClass('isActive')
  });
  $faqButton.click(function () {
    $faqItem.each(function () {
      $(this).addClass('isActive')
    })
  });
  $faqItem.click(function () {
    $(this).toggleClass('isActive')
  })
  $('.slider--main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    fade: true,
    asNavFor: '.slider--nav',
    prevArrow: '<div class="icon icon--left"><img src="./img/icon--arrow-left.svg" class="img img--arrow" alt="icon arrow"></div>',
    nextArrow: '<div class="icon icon--right"><img src="./img/icon--arrow-right.svg" class="img img--arrow" alt="icon arrow"></div>',
  });
  $('.slider--nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider--main',
    focusOnSelect: true,
    arrows: false,
    onAfterChange: function (slide, index) {
      console.log("slider-nav change");
      console.log(this.$slides.get(index));
      $('.isActive').removeClass('isActive');
      $(this.$slides.get(index)).addClass('isActive');
    },
    onInit: function (slick) {
      $(slick.$slides.get(0)).addClass('isActive');
    }
  });
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    console.log(scroll)
    if (scroll >= 500) {
      $header.addClass("isFixed");
    } else {
      $header.removeClass("isFixed");
    }
  });
});

