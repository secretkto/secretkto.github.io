$(document).ready(function () {
  inlineSVG.init({
    svgSelector: '.svg--inline',
  }, function () {
    console.log('All svg inlined');
  });

  let $videoHorizontalPlaceholder = $('.video--placeholder');
  let $videoHorizontal = $('.video--horizontal');
  let $modalOpen = $('.button--modal');
  let $modalClose = $('.modal .img--close');
  let $modal = $('.modal');
  let $faqItem = $('.faq .box--item');
  let $faqButton = $('.faq .button');
  $videoHorizontalPlaceholder.click(function () {
    $(this).removeClass('isActive');
    $videoHorizontal.addClass('isActive');
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
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    accessibility: true,
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
});

