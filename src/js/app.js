import sayHello from './lib/sayHello.js';
import './lib/lazy-load'
import './vue/main';

//sayHello
sayHello();

//lazyImg
$('.lazy_wrap').lazyImg({
    blurImgClass: '.lazy-img-small',
    type: 'inline', // image
    animate: 'fadeIn'
});