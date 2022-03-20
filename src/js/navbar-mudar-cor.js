(function () {
    var menu = document.getElementById('menu'); // colocar em cache
    var menu_lateral = document.getElementById('menu_lateral')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('movimento'); // > 0 ou outro valor desejado
        else menu.classList.remove('movimento');

        if (window.scrollY > 0) menu_lateral.classList.add('movimento');
        else menu_lateral.classList.remove('movimento')
    });
})();