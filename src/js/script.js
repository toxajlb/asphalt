'use strict';

import carousel from './modules/carousel';
import modal from './modules/modal';
import promoSlider from './modules/promoSlider';
import smoothScroll from './modules/smoothScroll';
import menu from './modules/menu';
import calc from './modules/calc';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

    carousel();
    modal();
    promoSlider();
    smoothScroll();
    menu();
    calc(); 
    tabs();  
});

