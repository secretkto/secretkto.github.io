$(document).ready(function () {
  let $videoHorizontalPlaceholder = $('.video--placeholder');
  let $videoHorizontal = $('.video--horizontal');
  let $menuOpen = $('.img--hamburger');
  let $menuClose = $('.menu .img--close');
  let $modalOpen = $('.button--modal');
  let $modalClose = $('.modal .img--close');
  let $modal = $('.modal');
  let $faqItem = $('.faq .box--item');
  let $faqButton = $('.faq .button');
  let $header = $('.section--header');
  let $body = $('body');

  $videoHorizontalPlaceholder.click(function () {
    $(this).removeClass('isActive');
    $videoHorizontal.addClass('isActive');
  });
  $menuOpen.click(function () {
    $body.toggleClass('isHeaderActive')
  });
  $menuClose.click(function () {
    $body.toggleClass('isHeaderActive')
  });
  $modalClose.click(function () {
    $modal.removeClass('isActive');
    $body.removeClass('isModalActive');
  });
  $modalOpen.click(function () {
    $modal.addClass('isActive');
    $body.addClass('isModalActive');
    $('.slider--main').slick({
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
        $('.isActive').removeClass('isActive');
        $(this.$slides.get(index)).addClass('isActive');
      },
      onInit: function (slick) {
        $(slick.$slides.get(0)).addClass('isActive');
      }
    });
  });
  $faqButton.click(function () {
    $faqItem.each(function () {
      $(this).addClass('isActive')
    })
  });
  $faqItem.click(function () {
    $(this).toggleClass('isActive')
  });

  $('.slider--cards.is1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    dots: false,
    prevArrow: '<div class="icon icon--left"><img src="./img/icon--arrow-left.svg" class="img img--arrow" alt="icon arrow"></div>',
    nextArrow: '<div class="icon icon--right"><img src="./img/icon--arrow-right.svg" class="img img--arrow" alt="icon arrow"></div>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '120px',
          centerMode: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
    ]
  });
  $('.slider--cards.is2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    dots: false,
    prevArrow: '<div class="icon icon--left"><img src="./img/icon--arrow-left.svg" class="img img--arrow" alt="icon arrow"></div>',
    nextArrow: '<div class="icon icon--right"><img src="./img/icon--arrow-right.svg" class="img img--arrow" alt="icon arrow"></div>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '120px',
          centerMode: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
    ]
  });
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 500) {
      $header.addClass("isFixed");
    } else {
      $header.removeClass("isFixed");
    }
  });
});

