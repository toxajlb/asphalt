function calc() {
    
    let small = document.querySelector('#small'),
        middle = document.querySelector('#middle'),
        large = document.querySelector('#large'),
        crushedStone = document.querySelector('#crushed-stone'),
        sand = document.querySelector('#sand'),
        square = document.querySelector('#square'),
        btn = document.querySelector('.button_calc'),
        result = document.querySelector('#out'),
        oneSquarePerSmall = 110,
        oneSquarePerMiddle = 112,
        oneSquarePerLarge = 114,
        oneSquarePerSand = 13,
        oneSquarePerCrushedStone = 19;

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) input.value = '';
      
            else input.style.border = 'none';

            switch(input.getAttribute('id')) {
                case 'small':
                    small = +input.value;
                    break;
                case 'middle':
                    middle = +input.value;
                    break;
                case 'large':
                    large = +input.value;
                    break;
                case 'crushed-stone':
                    crushedStone = +input.value;
                    break;
                case 'sand':
                    sand = +input.value;
                    break;
                case 'square':
                    square = +input.value;
                    break;
            }
        });      
    }

    getDynamicInformation('#small');
    getDynamicInformation('#middle');
    getDynamicInformation('#large');
    getDynamicInformation('#crushed-stone');
    getDynamicInformation('#sand');
    getDynamicInformation('#square');

    btn.addEventListener('click', () => { 
        let totalSquareSmall = square * oneSquarePerSmall,
            totalSquareMiddle = square * oneSquarePerMiddle,
            totalSquareLarge = square * oneSquarePerLarge,
            totalSquareSand = square * oneSquarePerSand,
            totalSquareCrushedStone = square * oneSquarePerCrushedStone; 

        if (small.value != '' && middle.value != '' && large.value != '' && crushedStone.value != '' && 
        sand.value != '' && square.value != '') {
            let sum = (small * totalSquareSmall * 25) + (middle * totalSquareMiddle * 25) + (large * totalSquareLarge * 25) + 
            (crushedStone * totalSquareCrushedStone) + (sand * totalSquareSand);
            result.textContent = `${sum} ₽`;      
        }   
        else alert('Пожалуйста, заполните все поля данными либо 0');       
    });
}

export default calc;