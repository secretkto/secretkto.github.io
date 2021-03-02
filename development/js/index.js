$(document).ready(function () {
  inlineSVG.init({
    svgSelector: '.svg--inline',
  }, function () {
    console.log('All svg inlined');
  });

  let $faqItem = $('.faq .box--item');
  let $faqButton = $('.faq .button');
  $faqButton.click(function () {
    $faqItem.each(function () {
      $(this).addClass('isActive')
    })
  })
  $faqItem.click(function () {
    $(this).toggleClass('isActive')
  })
});

