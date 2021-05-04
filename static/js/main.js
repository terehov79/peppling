"use strict";

(function ($) {
  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  }); // TODO Swiper slider init

  new Swiper('.swiper-container', {
    speed: 1000,
    spaceBetween: 50,
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

  copyrightUpdate('.copyright'); // TODO Burger

  $('button.menu').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active'); // $('.header__menu').toggleClass('menu--active');
    // $('body').toggleClass('overflow');
  });
  $('.wrapper').on('click', function () {
    $('button.menu').removeClass('active'); // $('.header__menu').removeClass('menu--active');
    // $('body').removeClass('overflow');
  }); // TODO Wrapper click burger disabled

  $('button.menu, .header__menu').on('click', function (event) {
    event.stopPropagation();
  });
  $(".step_js_next").on("click", function (event) {
    event.preventDefault();
    $(this).parents(".step_js").hide().next().show();
  });
  $(".step_js_prev").on("click", function (event) {
    event.preventDefault();
    $(this).parents(".step_js").hide().prev().show();
  });
  $('#date').mask('99/99/9999');
  $('#time').mask('99:99:99');
})(jQuery);