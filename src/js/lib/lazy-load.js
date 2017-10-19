/**
 * Created by GrandMaster on 19.10.2017.
 */
/** @var o $ */
"use strict";

$.fn.extend({
    lazyImg: function (props) {

        function addAnimate(self, animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            self.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }

        var options = {
            blurImgClass: '.lazy-img-small',
            type: 'inline', // image
//				animate: 'fadeIn'
        };

        if(props instanceof Object){
            $.each(props, function (code, val) {
                options[code] = val;
            });
        }

        var _self = $(this);
        var srcBig = _self.data('large'),
            imgLarge = new Image();

        if(options.animate){
//				$(imgLarge).css('visibility', 'hidden');
        } else {
            imgLarge.style.display = 'none';
        }

        imgLarge.src = srcBig;
        imgLarge.onload = function () {

            switch (options.type){
                case 'inline':
                    _self.css('background-image', 'url(' + srcBig + ')');
                    $(imgLarge).remove();
                    _self.find(options.blurImgClass).remove();

                    if(options.animate){
                        addAnimate(_self, options.animate);
                    }

                    break;
                case 'img':

                    _self.find(options.blurImgClass).fadeOut(200, function () {
                        _self.find(options.blurImgClass).remove();
                    });

                    if(options.animate){
                        $(imgLarge).addClass('animated ' + options.animate);
                    }
                    _self.append(imgLarge);
                    break;
            }

        };
        return this;
    }
});