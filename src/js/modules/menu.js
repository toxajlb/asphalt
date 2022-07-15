function menu() {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menuSecond = document.querySelector('.menu-second'),
          closeElem = document.querySelector('.menu__close'),
          closeElemSecond = document.querySelector('.menu-second__close'),
          sublistFirst = document.querySelector('#sublist-first'),
          sublistSecond = document.querySelector('#sublist-second'),
          sublistThird = document.querySelector('#sublist-third'),
          sublistFourth = document.querySelector('#sublist-fourth'),
          sublistFifth = document.querySelector('#sublist-fifth'),
          asphalting = document.querySelector('#asphalting'),
          linkFirst = document.querySelector('#link-first'),
          linkSecond = document.querySelector('#link-second'),
          linkThird = document.querySelector('#link-third'),
          linkFourth = document.querySelector('#link-fourth'),
          linkFifth= document.querySelector('#link-fifth'),
          closeFirst = document.querySelector('#close-first'),
          closeSecond = document.querySelector('#close-second'),
          closeThird = document.querySelector('#close-third'),
          closeFourth = document.querySelector('#close-fourth'),
          closeFifth = document.querySelector('#close-fifth');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    })

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    })

    asphalting.addEventListener('mouseover', () => {
        menuSecond.classList.add('active');
    })

    closeElemSecond.addEventListener('click', () => {
        menuSecond.classList.remove('active');
    })

    function menuCall(item, secondItem, thirdItem) {
        item.addEventListener('mousedown', () => {
            secondItem.style.display = 'block';
        })
    
        secondItem.addEventListener('mouseover', (e) => {
            e.currentTarget.style.display = 'block';
        }) 
    
        secondItem.addEventListener('mouseout', (e) => {
            e.currentTarget.style.display = 'none';
        }) 
    
        thirdItem.addEventListener('click', () => {
            secondItem.style.display = 'none';
        }) 
    }

    menuCall(linkFirst, sublistFirst, closeFirst);
    menuCall(linkSecond, sublistSecond, closeSecond);
    menuCall(linkThird, sublistThird, closeThird);
    menuCall(linkFourth, sublistFourth, closeFourth);
    menuCall(linkFifth, sublistFifth, closeFifth);
}

export default menu;