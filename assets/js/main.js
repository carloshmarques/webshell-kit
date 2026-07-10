// Substitui o topo do teu main.js por isto:
const logger = {
    log: function(msg) {
        if (typeof console !== 'undefined') console.log(msg);
    }
};

logger.log("Hurray it Works, ready or not were i came :)!");

// O teu coiso original para abrir o menu (Intacto e Funcional):
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger') || document.querySelector('.menu-btn__burger'); 

let showMenu = false; 

if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('open');
    if (hamburger) hamburger.classList.add('open');
    showMenu = true;
  } else {
    menuBtn.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    showMenu = false;
  }
}
