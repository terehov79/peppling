(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

    // TODO Swiper slider init
  new Swiper('.swiper-container', {
    speed: 1000,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.btn_next',
      prevEl: '.btn_prev'
    }
  });

// TODO Copyright auto update
function copyrightUpdate(el) {
  let d = new Date(), copyright = $(el);
  copyright.text(`© Peppling LLC, All rights reserved, ${d.getFullYear()}`);
}
copyrightUpdate('.copyright')

})(jQuery);