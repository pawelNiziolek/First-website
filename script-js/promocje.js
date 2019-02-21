// menu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).on('scroll', function () {
  // wartości wspólne:
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  //sekcja menu:
  const $menu = $('.menu');
  const menuFromTop = $menu.offset().top;
  const menuHeight = $menu.outerHeight();

  const $logo = $('.logo');
  const logoFromTop = $logo.offset().top;
  const logoHeight = $logo.outerHeight();

  if (scrollValue > menuFromTop + menuHeight) {
    $menu.addClass('scroll');
  }
  if (scrollValue > logoFromTop + logoHeight) {
    $logo.addClass('logoScl');
  }

  // czyściciel:
  if (scrollValue < 40) {
    $('nav').removeClass('scroll');
  }
  if (scrollValue < 40) {
    $('div').removeClass('logoScl');
  }
})

// menu-media:
$(".menu-ham").on("click", function () {
  $(".fas").toggleClass('off');
  $(".menu-media").toggleClass('ready');
})