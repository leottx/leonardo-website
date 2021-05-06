import jump from 'jump.js';
import './style.scss'

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