const abrirMenu = document.querySelector('#abrir');
const menu = document.querySelector('#menu2');
const fecharMenu = document.querySelector('#fechar');

abrirMenu.addEventListener('click', () => {
    if (menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
    } else {
        menu.classList.add('ativo');
        menu.style.transform = 'translateX(0%)';
    }
});

fecharMenu.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
    menu.classList.remove('ativo');
});