// menu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).on('scroll', function () {
  // common values:
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  //menu section:
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

  // scourer:
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


// rolled treatments !!!!!!!!!!!!!!!!!!!!!!!!!!


const tf1 = document.querySelector('.tf1');
const tf2 = document.querySelector('.tf2');
const tf3 = document.querySelector('.tf3');
const tf4 = document.querySelector('.tf4');
const tf5 = document.querySelector('.tf5');
const tk1 = document.querySelector('.tk1');
const tm1 = document.querySelector('.tm1');
const tm2 = document.querySelector('.tm2');
const tm3 = document.querySelector('.tm3');
const tp1 = document.querySelector('.tp1');
const tp2 = document.querySelector('.tp2');
const tp3 = document.querySelector('.tp3');
const tp4 = document.querySelector('.tp4');
const tp5 = document.querySelector('.tp5');
const tp6 = document.querySelector('.tp6');
const tfo1 = document.querySelector('.tfo1');
const tfo2 = document.querySelector('.tfo2');
const tfo3 = document.querySelector('.tfo3');
const tpw1 = document.querySelector('.tpw1');
const twos1 = document.querySelector('.twos1');
const tre1 = document.querySelector('.tre1');
const tre2 = document.querySelector('.tre2');
const tre3 = document.querySelector('.tre3');
const tre4 = document.querySelector('.tre4');
const tu1 = document.querySelector('.tu1');
const tu2 = document.querySelector('.tu2');
const tfr1 = document.querySelector('.tfr1');
const tfr2 = document.querySelector('.tfr2');
const tfr3 = document.querySelector('.tfr3');
const tfr4 = document.querySelector('.tfr4');
const tfr5 = document.querySelector('.tfr5');
const tbr1 = document.querySelector('.tbr1');
const tma1 = document.querySelector('.tma1');
const tma2 = document.querySelector('.tma2');
const tma3 = document.querySelector('.tma3');
const tdl1 = document.querySelector('.tdl1');
const tlr1 = document.querySelector('.tlr1');
const tdm1 = document.querySelector('.tdm1');

const spantf1 = document.querySelector('h2.t1 span');
const spantf2 = document.querySelector('h2.t2 span');
const spantf3 = document.querySelector('h2.t3 span');
const spantf4 = document.querySelector('h2.t4 span');
const spantf5 = document.querySelector('h2.t5 span');
const spantk1 = document.querySelector('h2.t6 span');
const spantm1 = document.querySelector('h2.t7 span');
const spantm2 = document.querySelector('h2.t8 span');
const spantm3 = document.querySelector('h2.t9 span');
const spantp1 = document.querySelector('h2.t10 span');
const spantp2 = document.querySelector('h2.t11 span');
const spantp3 = document.querySelector('h2.t12 span');
const spantp4 = document.querySelector('h2.t13 span');
const spantp5 = document.querySelector('h2.t14 span');
const spantp6 = document.querySelector('h2.t15 span');
const spantfo1 = document.querySelector('h2.t16 span');
const spantfo2 = document.querySelector('h2.t17 span');
const spantfo3 = document.querySelector('h2.t18 span');
const spantpw1 = document.querySelector('h2.t19 span');
const spantwos1 = document.querySelector('h2.t20 span');
const spantre1 = document.querySelector('h2.t21 span');
const spantre2 = document.querySelector('h2.t22 span');
const spantre3 = document.querySelector('h2.t23 span');
const spantre4 = document.querySelector('h2.t24 span');
const spantu1 = document.querySelector('h2.t25 span');
const spantu2 = document.querySelector('h2.t26 span');
const spantfr1 = document.querySelector('h2.t27 span');
const spantfr2 = document.querySelector('h2.t28 span');
const spantfr3 = document.querySelector('h2.t29 span');
const spantfr4 = document.querySelector('h2.t30 span');
const spantfr5 = document.querySelector('h2.t31 span');
const spantbr1 = document.querySelector('h2.t32 span');
const spantma1 = document.querySelector('h2.t33 span');
const spantma2 = document.querySelector('h2.t34 span');
const spantma3 = document.querySelector('h2.t35 span');
const spantdl1 = document.querySelector('h2.t36 span');
const spantlr1 = document.querySelector('h2.t37 span');
const spantdm1 = document.querySelector('h2.t38 span');

const htwo1 = document.querySelector('h2.t1');
const htwo2 = document.querySelector('h2.t2');
const htwo3 = document.querySelector('h2.t3');
const htwo4 = document.querySelector('h2.t4');
const htwo5 = document.querySelector('h2.t5');
const htwo6 = document.querySelector('h2.t6');
const htwo7 = document.querySelector('h2.t7');
const htwo8 = document.querySelector('h2.t8');
const htwo9 = document.querySelector('h2.t9');
const htwo10 = document.querySelector('h2.t10');
const htwo11 = document.querySelector('h2.t11');
const htwo12 = document.querySelector('h2.t12');
const htwo13 = document.querySelector('h2.t13');
const htwo14 = document.querySelector('h2.t14');
const htwo15 = document.querySelector('h2.t15');
const htwo16 = document.querySelector('h2.t16');
const htwo17 = document.querySelector('h2.t17');
const htwo18 = document.querySelector('h2.t18');
const htwo19 = document.querySelector('h2.t19');
const htwo20 = document.querySelector('h2.t20');
const htwo21 = document.querySelector('h2.t21');
const htwo22 = document.querySelector('h2.t22');
const htwo23 = document.querySelector('h2.t23');
const htwo24 = document.querySelector('h2.t24');
const htwo25 = document.querySelector('h2.t25');
const htwo26 = document.querySelector('h2.t26');
const htwo27 = document.querySelector('h2.t27');
const htwo28 = document.querySelector('h2.t28');
const htwo29 = document.querySelector('h2.t29');
const htwo30 = document.querySelector('h2.t30');
const htwo31 = document.querySelector('h2.t31');
const htwo32 = document.querySelector('h2.t32');
const htwo33 = document.querySelector('h2.t33');
const htwo34 = document.querySelector('h2.t34');
const htwo35 = document.querySelector('h2.t35');
const htwo36 = document.querySelector('h2.t36');
const htwo37 = document.querySelector('h2.t37');
const htwo38 = document.querySelector('h2.t38');

// divs classes
// '.tf1', '.tf2', '.tf3', '.tf4', '.tf5', '.tk1', '.tm1', '.tm2', '.tm3', '.tp1', '.tp2', '.tp3', '.tp4', '.tp5', '.tp6', '.tfo1', '.tfo2', '.tfo3', '.tpw1', '.twos1', '.tre1', '.tre2', '.tre3', '.tre4', '.tu1', '.tu2', '.tfr1', '.tfr2', '.tfr3', '.tfr4', '.tfr5', '.tbr1', '.tma1', '.tma2', '.tma3', '.tdl1', '.tlr1', '.tdm1'

htwo1.addEventListener('click', () => {
  tf1.classList.toggle('vis') ? spantf1.textContent = "-" : spantf1.textContent = "+";
})
htwo2.addEventListener('click', () => {
  tf2.classList.toggle('vis') ? spantf2.textContent = "-" : spantf2.textContent = "+";
})
htwo3.addEventListener('click', () => {
  tf3.classList.toggle('vis') ? spantf3.textContent = "-" : spantf3.textContent = "+";
})
htwo4.addEventListener('click', () => {
  tf4.classList.toggle('vis') ? spantf4.textContent = "-" : spantf4.textContent = "+";
})
htwo5.addEventListener('click', () => {
  tf5.classList.toggle('vis') ? spantf5.textContent = "-" : spantf5.textContent = "+";
})
htwo6.addEventListener('click', () => {
  tk1.classList.toggle('vis') ? spantk1.textContent = "-" : spantk1.textContent = "+";
})
htwo7.addEventListener('click', () => {
  tm1.classList.toggle('vis') ? spantm1.textContent = "-" : spantm1.textContent = "+";
})
htwo8.addEventListener('click', () => {
  tm2.classList.toggle('vis') ? spantm2.textContent = "-" : spantm2.textContent = "+";
})
htwo9.addEventListener('click', () => {
  tm3.classList.toggle('vis') ? spantm3.textContent = "-" : spantm3.textContent = "+";
})
htwo10.addEventListener('click', () => {
  tp1.classList.toggle('vis') ? spantp1.textContent = "-" : spantp1.textContent = "+";
})
htwo11.addEventListener('click', () => {
  tp2.classList.toggle('vis') ? spantp2.textContent = "-" : spantp2.textContent = "+";
})
htwo12.addEventListener('click', () => {
  tp3.classList.toggle('vis') ? spantp3.textContent = "-" : spantp3.textContent = "+";
})
htwo13.addEventListener('click', () => {
  tp4.classList.toggle('vis') ? spantp4.textContent = "-" : spantp4.textContent = "+";
})
htwo14.addEventListener('click', () => {
  tp5.classList.toggle('vis') ? spantp5.textContent = "-" : spantp5.textContent = "+";
})
htwo15.addEventListener('click', () => {
  tp6.classList.toggle('vis') ? spantp6.textContent = "-" : spantp6.textContent = "+";
})
htwo16.addEventListener('click', () => {
  tfo1.classList.toggle('vis') ? spantfo1.textContent = "-" : spantfo1.textContent = "+";
})
htwo17.addEventListener('click', () => {
  tfo2.classList.toggle('vis') ? spantfo2.textContent = "-" : spantfo2.textContent = "+";
})
htwo18.addEventListener('click', () => {
  tfo3.classList.toggle('vis') ? spantfo3.textContent = "-" : spantfo3.textContent = "+";
})
htwo19.addEventListener('click', () => {
  tpw1.classList.toggle('vis') ? spantpw1.textContent = "-" : spantpw1.textContent = "+";
})
htwo20.addEventListener('click', () => {
  twos1.classList.toggle('vis') ? spantwos1.textContent = "-" : spantwos1.textContent = "+";
})
htwo21.addEventListener('click', () => {
  tre1.classList.toggle('vis') ? spantre1.textContent = "-" : spantre1.textContent = "+";
})
htwo22.addEventListener('click', () => {
  tre2.classList.toggle('vis') ? spantre2.textContent = "-" : spantre2.textContent = "+";
})
htwo23.addEventListener('click', () => {
  tre3.classList.toggle('vis') ? spantre3.textContent = "-" : spantre3.textContent = "+";
})

htwo24.addEventListener('click', () => {
  tre4.classList.toggle('vis') ? spantre4.textContent = "-" : spantre4.textContent = "+";
})
htwo25.addEventListener('click', () => {
  tu1.classList.toggle('vis') ? spantu1.textContent = "-" : spantu1.textContent = "+";
})
htwo26.addEventListener('click', () => {
  tu2.classList.toggle('vis') ? spantu2.textContent = "-" : spantu2.textContent = "+";
})
htwo27.addEventListener('click', () => {
  tfr1.classList.toggle('vis') ? spantfr1.textContent = "-" : spantfr1.textContent = "+";
})
htwo28.addEventListener('click', () => {
  tfr2.classList.toggle('vis') ? spantfr2.textContent = "-" : spantfr2.textContent = "+";
})
htwo29.addEventListener('click', () => {
  tfr3.classList.toggle('vis') ? spantfr3.textContent = "-" : spantfr3.textContent = "+";
})
htwo30.addEventListener('click', () => {
  tfr4.classList.toggle('vis') ? spantfr4.textContent = "-" : spantfr4.textContent = "+";
})
htwo31.addEventListener('click', () => {
  tfr5.classList.toggle('vis') ? spantfr5.textContent = "-" : spantfr5.textContent = "+";
})
htwo32.addEventListener('click', () => {
  tbr1.classList.toggle('vis') ? spantbr1.textContent = "-" : spantbr1.textContent = "+";
})
htwo33.addEventListener('click', () => {
  tma1.classList.toggle('vis') ? spantma1.textContent = "-" : spantma1.textContent = "+";
})
htwo34.addEventListener('click', () => {
  tma2.classList.toggle('vis') ? spantma2.textContent = "-" : spantma2.textContent = "+";
})
htwo35.addEventListener('click', () => {
  tma3.classList.toggle('vis') ? spantma3.textContent = "-" : spantma3.textContent = "+";
})
htwo36.addEventListener('click', () => {
  tdl1.classList.toggle('vis') ? spantdl1.textContent = "-" : spantdl1.textContent = "+";
})
htwo37.addEventListener('click', () => {
  tlr1.classList.toggle('vis') ? spantlr1.textContent = "-" : spantlr1.textContent = "+";
})
htwo38.addEventListener('click', () => {
  tdm1.classList.toggle('vis') ? spantdm1.textContent = "-" : spantdm1.textContent = "+";
})