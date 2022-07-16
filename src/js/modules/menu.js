function menu() {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menuSecond = document.querySelector('.menu-second'),
          menuPrice = document.querySelector('.menu-price'),
          closeElem = document.querySelector('.menu__close'),
          closeElemSecond = document.querySelector('.menu-second__close'),
          closeElemPrice = document.querySelector('.menu-price__close'),
          asphalting = document.querySelector('#asphalting'),
          prices = document.querySelector('#prices');

    function menuChoise(elem1, elem2, elem3) {
        elem1.addEventListener('click', () => {
            elem2.classList.add('active');
        })
    
        elem3.addEventListener('click', () => {
            elem2.classList.remove('active');
        })
    }
    menuChoise(hamburger, menu, closeElem);
    menuChoise(asphalting, menuSecond, closeElemSecond);
    menuChoise(prices, menuPrice, closeElemPrice);

    
    $('.menu-second__pointer').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.menu-second__sublist').eq(i).toggleClass('.menu-second__sublist active');
            $('.menu-second__pointer').eq(i).toggleClass('.menu-second__pointer active');
        })
    });

    $('.menu-price__pointer').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.menu-price__sublist').eq(i).toggleClass('.menu-price__sublist active');
            $('.menu-price__pointer').eq(i).toggleClass('.menu-price__pointer active');
        })
    });
}

export default menu;