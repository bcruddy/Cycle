/**
 * Created by <brian at briancruddy dot com> on 4/12/15.
 */
var imageCycle = (function (options) {

    'use strict';

    var target, interval, images;

    if (!options) {
        options = {
            selector: '.image-cycle',
            target: 'li',
            interval: 2000
        };
    }

    target = document.querySelector(options.selector).dataset.target;
    interval = document.querySelector(options.selector).dataset.interval;

    if (target) {
        options.target = target;
    }

    if (interval) {
        options.interval = interval;
    }

    images = document.querySelectorAll(options.selector + ' ' + options.target);

    var i = 0;
    setInterval(function () {
        if (i == images.length) { i = 0; }

        for (var j = 0; j < images.length; j++) {
            images[j].style.zIndex = 0;
        }

        images[i].style.zIndex = 1;
        i++;
    }, options.interval);

});

