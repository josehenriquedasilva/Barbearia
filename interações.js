const abrirMenu = document.querySelector('#abrir');
const menu2 = document.querySelector('#menu2');
const fecharMenu = document.querySelector('#fechar');
const menu = document.querySelector('.menuFixo');

abrirMenu.addEventListener('click', () => {
    menu2.classList.add('abrir');
});

fecharMenu.addEventListener('click', () => {
    menu2.classList.remove('abrir');
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

