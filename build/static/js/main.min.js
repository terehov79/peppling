"use strict";

(function ($) {
  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  }); // TODO Swiper slider init

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
  }); // TODO Copyright auto update

  function copyrightUpdate(el) {
    var d = new Date(),
        copyright = $(el);
    copyright.text("\xA9 Peppling LLC, All rights reserved, ".concat(d.getFullYear()));
  }

  copyrightUpdate('.copyright');
})(jQuery);