const abrirMenu = document.querySelector('#abrir');
const menu2 = document.querySelector('#menu2');
const fecharMenu = document.querySelector('#fechar');
const menu = document.querySelector('.menuFixo');

abrirMenu.addEventListener('click', () => {
    if (menu2.classList.contains('ativo')) {
        menu2.classList.remove('ativo');
    } else {
        menu2.classList.add('ativo');
        menu2.style.transform = 'translateX(0%)';
    }
});

fecharMenu.addEventListener('click', () => {
    menu2.style.transform = 'translateX(100%)';
    menu2.classList.remove('ativo');
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 1) {
        menu.classList.add('menuFixo-ativo')
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden'
        menu.classList.remove('menuFixo-ativo')
    }
});

