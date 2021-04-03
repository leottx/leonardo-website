import jump from 'jump.js';

// Obtendo o elemento <button class="nav__toggle">
const $toggleBtn = document.querySelector('.nav-toogle');
// Obtendo o elemento <header>
const $header = document.querySelector('header');
// Obtendo o elemento <ul class="nav__options">
const $navOpts = document.querySelector('.nav__options');


// Associando o evento 'click' ao elemento <button class="nav__toggle">
$toggleBtn.addEventListener('click', (e) => {
  toggleMenu();
  // e.currentTarget.classList.toggle('open');
})

function toggleMenu() {
  // Se o elemento <header> conter a classe '.grow', aguarda-se 200ms para remove-la. Senão, adiciona-se tal classe.
  if ($header.classList.contains('grow')) {
    $toggleBtn.classList.remove('open')
    setTimeout(function() {$header.classList.remove('grow')}, 200);
  } else {
    $header.classList.add('grow');
    $toggleBtn.classList.add('open');
  }

  // Se o elemento <ul class="nav__options"> conter a classe '.slide' a mesma é removida. Senão aguarda-se 200ms para adiciona-la.
  if ($navOpts.classList.contains('slide')) {
    $navOpts.classList.remove('slide');
  } else {
    setTimeout(function() {$navOpts.classList.add('slide')}, 100);
  }
}


/* SMOOTH SCROLL */

// Obtendo o botão <a class="btn-contact-lg">
const $btnContactSm = document.querySelector('#btn-contact-sm');

// Obtendo o botão <a class="btn-contact-lg">
const $btnContactLg = document.querySelector('#btn-contact-lg');

// Obtendo o botão <a class="btn-portfolio-sm">
const $btnPortfolioSm = document.querySelector('#btn-portfolio-sm');

// Obtendo o botão <a class="btn-portfolio-lg">
const $btnPortfolioLg = document.querySelector('#btn-portfolio-lg');



// Aplicando o SMOOTH SCROLL ao clicar nos botões do menu

// Botão CONTATO tela GRANDE
$btnContactLg.addEventListener('click', function() {
  jump('.contact');
});

// Botão CONTATO tela PEQUENA
$btnContactSm.addEventListener('click', function() {
  jump('.contact');
  toggleMenu();
});

// Botão PORTFOLIO tela GRANDE
$btnPortfolioLg.addEventListener('click', function() {
  jump('.portfolio', {
    offset: -70
  });
});

// Botão PORTFOLIO tela PEQUENA
$btnPortfolioSm.addEventListener('click', function() {
  jump('.portfolio', {
    offset: -60
  });
  toggleMenu();
});









/*// Obtendo o botão <a class="btn-contact-lg">
const $btnContactLg = document.querySelector('#btn-contact-lg');
// Obtendo o botão a <a class="btn-portfolio-lg">
const $btnPortfolioLg = document.querySelector('#btn-portfolio-lg');

// Essa função recebe dois parâmetros. O primeiro consiste no elemento para o qual a página deve scrollar e o segundo a duração da animação de rolagem
const smoothScroll = function(target, duration) {
  // Obtendo o elemento para o qual a página deverá scrollar
  var $target = document.querySelector(target);
  // Obtendo a posição da aresta superior do elemento alvo do scroll
  const targetPosition = $target.getBoundingClientRect().top;
  // Obtendo a distância inicial do scroll em relação ao eixo Y da viewport
  const startPosition = window.pageYOffset;
  // Calculando a distancia entre o alvo e a posição atual do scroll
  const distance = targetPosition - startPosition;
  // Tempo inicial
  let startTime = null;

  // Essa função executa a animação de scroll enquanto o tempo passado desde o momento do clique for menor que a duração, no caso, 1 segundo.
  function animation(currentTime) {
    if (startTime === null) {startTime = currentTime;}
    let timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) {requestAnimationFrame(animation);}
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {return c / 2 * t * t + b;}
    t--;
    return -c / 2 * (t * (t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

$btnContactLg.addEventListener('click', function() {
  smoothScroll('.contact', 1000);
});
*/