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
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
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

    // Hamburger

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    })

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    })
    
    // Calculating
    
    
    function calc() {
    
        let small = document.querySelector('#small'),
            large = document.querySelector('#large'),
            crushedStone = document.querySelector('#crushed-stone'),
            sand = document.querySelector('#sand'),
            square = document.querySelector('#square'),
            btn = document.querySelector('#btn'),
            result = document.querySelector('#out'),
            oneSquare = 550; 

        function getDynamicInformation(selector) {
            const input = document.querySelector(selector);
    
            input.addEventListener('input', () => {
    
                if (input.value.match(/\D/g)) input.value = '';
          
                else input.style.border = 'none';
    
                switch(input.getAttribute('id')) {
                    case 'small':
                        small = +input.value;
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
        getDynamicInformation('#large');
        getDynamicInformation('#crushed-stone');
        getDynamicInformation('#sand');
        getDynamicInformation('#square');

        btn.addEventListener('click', () => {           
            if (small.value != '' && large.value != '' && crushedStone.value != '' && 
            sand.value != '' && square.value != '') {
                let totalSquare = square * oneSquare;
                let sum = (small * totalSquare) + (large * totalSquare) + 
                (crushedStone * totalSquare) + (sand * totalSquare);
                result.textContent = `${sum} ₽`;
            }   
            else alert('Введите числовые данные');     
        });
    }
    calc(); 
});

