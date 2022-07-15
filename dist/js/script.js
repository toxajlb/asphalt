'use strict';

import carousel from './modules/carousel';
import modal from './modules/modal';
import smoothScroll from './modules/smoothScroll';
import menu from './modules/menu';
import calc from './modules/calc';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

    carousel();
    modal();
    smoothScroll();
    menu();
    calc(); 
    tabs();  
});

