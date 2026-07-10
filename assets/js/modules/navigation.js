module.exports = {
    // Esta é a gaveta exata que o main.js está a tentar abrir
    initMenu: function() {
        const menuBtn = document.querySelector('.menu-btn');
        const hamburger = document.querySelector('.menu-btn_burger');

        // Se a página não tiver o botão, o código para aqui de forma segura
        if (!menuBtn) return;

        let showMenu = false;

        menuBtn.addEventListener('click', toggleMenu);

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
    }
};


