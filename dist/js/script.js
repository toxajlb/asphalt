$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        fade: true,
        cssEasy: 'linear',
        //autoplay: true,
        //autoplaySpeed: 1200,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                check: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
                check: "Кликните флажок чтобы продолжить!"
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form'); 

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});

window.addEventListener('DOMContentLoaded', () => {

    // Menu

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
    
    // Calculating
     
    function calc() {
    
        let small = document.querySelector('#small'),
            middle = document.querySelector('#middle'),
            large = document.querySelector('#large'),
            crushedStone = document.querySelector('#crushed-stone'),
            sand = document.querySelector('#sand'),
            square = document.querySelector('#square'),
            btn = document.querySelector('#btn'),
            result = document.querySelector('#out'),
            oneSquarePerSmall = 108,
            oneSquarePerMiddle = 110,
            oneSquarePerLarge = 112,
            oneSquarePerSand = 7,
            oneSquarePerCrushedStone = 10;

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
                let sum = (small * totalSquareSmall) + (middle * totalSquareMiddle) + (large * totalSquareLarge) + 
                (crushedStone * totalSquareCrushedStone) + (sand * totalSquareSand);
                result.textContent = `${sum} ₽`;      
            }   
            else alert('Введите числовые данные');       
        });
    }
    calc(); 
});

