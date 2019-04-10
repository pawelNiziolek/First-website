// menu
$(document).on("scroll", function() {
  // wartości wspólne:
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  // sekcja card:
  const $picCards = $(".pic-card");
  const picCardsFromTop = $picCards.offset().top;
  const picCardsHeight = $picCards.outerHeight();

  const $cards = $(".card");
  const cardsFromTop = $cards.offset().top;
  const cardsHeight = $cards.outerHeight();

  if (scrollValue > picCardsFromTop + picCardsHeight / 4 - windowHeight) {
    $picCards.addClass("active");
  }
  if (scrollValue > cardsFromTop + cardsHeight / 4 - windowHeight) {
    $cards.addClass("active");
  }
  // czyściciel:
  if (scrollValue < 800) {
    $("div").removeClass("active");
  }

  //sekcja hit:
  const $wrapHit = $(".wrap-hit");
  const wrapHitFromTop = $wrapHit.offset().top;
  const wrapHitHeight = $wrapHit.outerHeight();

  if (scrollValue > wrapHitFromTop + wrapHitHeight / 8 - windowHeight) {
    $wrapHit.addClass("grow");
  }

  // czyściciel:
  if (scrollValue < 400) {
    $("div").removeClass("grow");
  }

  //sekcja menu:
  const $menu = $(".menu");
  const menuFromTop = $menu.offset().top;
  const menuHeight = $menu.outerHeight();

  const $logo = $(".logo");
  const logoFromTop = $logo.offset().top;
  const logoHeight = $logo.outerHeight();

  if (scrollValue > menuFromTop + menuHeight) {
    $menu.addClass("scroll");
  }
  if (scrollValue > logoFromTop + logoHeight) {
    $logo.addClass("logoScl");
  }

  // czyściciel:
  if (scrollValue < 40) {
    $("nav").removeClass("scroll");
  }
  if (scrollValue < 40) {
    $("div").removeClass("logoScl");
  }
});

// menu-media:
$(".menu-ham").on("click", function() {
  $(".fas").toggleClass("off");
  $(".menu-media").toggleClass("ready");
});

// sekcja contact (scroll na sekcje):
$(".cont").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: $(".contact").offset().top
    },
    500
  );
});

//sekcja header
//parametry
let activeElement = 0;
const timeChange = 8000;

//elementy do pracy
const imageHtml = document.querySelector(".bgd");
const h2Html = document.querySelector(".content h2");
const h3Html = document.querySelector(".content h3");
const h4Html = document.querySelector(".content h4");
const pHtml = document.querySelector(".content p");
const aHtml = document.querySelector(".content a");

// info o tablichach elemnów podmienionych:
const image = [
  "graphics/pictures/kosmet1.jpg",
  "graphics/pictures/blackdoll.jpg",
  "graphics/pictures/karbo3.jpg",
  "graphics/pictures/wodorowe.jpg",
  "graphics/pictures/tattoo.jpg"
];
const h2 = [
  "BEAUTY STORY",
  "LASEROWY PEELING WĘGLOWY",
  "KARBOKSYTERAPIA",
  "WODOROWE OCZYSZCZANIE SKÓRY",
  "LASEROWE USUWANIE TATUAŻU"
];
const h3 = [
  "TWOJE PIĘKNO POD NAJLEPSZĄ OPIEKĄ",
  "Hollywoodzki zabieg Black Doll",
  "Szeroki wachlarz zastosowań.",
  "AquaPeel H2",
  "Laser Q-switch Nd:YAG"
];
const p = [
  "ZAREZERWUJ JUŻ TERAZ SWÓJ CZAS I ZACZNIJ Z NAMI SWOJĄ PIĘKNĄ HISTORIĘ !",
  "Laserowy peeling węglowy to innowacyjny zabieg polegający na naświetlaniu promieniem laserowym skóry twarzy lub dekoltu uprzednio pokrytych specjalną maską. Efektem zabiegu jest oczyszczona, gładka skóra o jednolitym kolorycie.",
  "Karboksyterpia to jedna z najskuteczniejszych i bezpiecznych metod redukujących cellulit i tkankę tłuszczową, blizny i rozstępy, obrzęki i cienie pod oczami. Doskonała profilaktyka przeciwzmarszczkowa.",
  "Nowoczesna metoda oczyszczania skóry wodorem. Usuwanie wolnych rodników i oczyszczanie skóry.",
  "Laser Q-SWITCH to bardzo krótki impuls o wysokiej energii dzięki czemu zabieg jest bardzo skuteczny, bezpieczny dla pacjenta i gwarantuje widoczne efekty już po pierwszym zabiegu."
];
const h4 = [
  "Zobacz kartę zabiegów",
  "Zobacz kartę zabiegów",
  "Zobacz kartę zabiegów",
  "Zobacz kartę zabiegów",
  "Zobacz kartę zabiegów"
];
const a = [
  "../files.html/treatments-description.html",
  "../files.html/treatments-description.html",
  "../files.html/treatments-description.html",
  "../files.html/treatments-description.html",
  "../files.html/treatments-description.html"
];

function changeElement() {
  activeElement++;
  if (activeElement == image.length) {
    activeElement = 0;
  }
  imageHtml.src = image[activeElement];
  h2Html.textContent = h2[activeElement];
  h3Html.textContent = h3[activeElement];
  h4Html.textContent = h4[activeElement];
  pHtml.textContent = p[activeElement];
  aHtml.src = a[activeElement];
}

setInterval(changeElement, timeChange);
