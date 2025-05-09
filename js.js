
const words = ['Vitor R. Menezes', 'Full-Stack Dev'];
let idx = 0;
let charIdx = 0;


const TYPING_SPEED   = 150;   
const ERASING_SPEED  = 100;   
const NEW_WORD_DELAY = 2000; 
const NEXT_WORD_DELAY = 500; 

const typingEl = document.querySelector('.typing');
const cursorEl = document.querySelector('.cursor');

function type() {
  
  if (charIdx < words[idx].length) {
    typingEl.textContent += words[idx].charAt(charIdx);
    charIdx++;
    setTimeout(type, TYPING_SPEED);
  } else {
   
    setTimeout(erase, NEW_WORD_DELAY);
  }
}

function erase() {
 
  if (charIdx > 0) {
    typingEl.textContent = words[idx].substring(0, charIdx - 1);
    charIdx--;
    setTimeout(erase, ERASING_SPEED);
  } else {
  
    idx = (idx + 1) % words.length;
    setTimeout(type, NEXT_WORD_DELAY);
  }
}


cursorEl.style.animation = 'blink 0.7s infinite';

document.addEventListener('DOMContentLoaded', () => {
 
  setTimeout(type, NEXT_WORD_DELAY);
});
document.querySelectorAll('.verMais').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.closest('.project-tab').dataset.proj;

    // Fecha todos
    document.querySelectorAll('.project-detail').forEach(d => d.classList.remove('active'));

    // Abre o correspondente
    const toOpen = document.querySelector(`.project-detail[data-detail="${key}"]`);
    if (toOpen) toOpen.classList.add('active');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.project-detail').classList.remove('active');
  });
});document.querySelectorAll('.project-tab .verMais').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.closest('.project-tab');
    const key = tab.dataset.proj;

    // Fecha todas as abas de detalhe visíveis
    document.querySelectorAll('.project-detail').forEach(detail => {
      detail.classList.remove('visible');
    });

    // Abre apenas a aba correspondente
    const target = document.querySelector(`.project-detail[data-proj="${key}"]`);
    if (target) target.classList.add('visible');
  });
});

// Fecha individualmente ao clicar no botão "Fechar"
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.project-detail').classList.remove('visible');
  });
});
