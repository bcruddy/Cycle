/**
 * Created by <brian at briancruddy dot com> on 4/12/15.
 */
(function () {

    'use strict';

    var selector = '.image-cycle',
        target, interval, images, width;

    function sel(selector) {
        return document.querySelector(selector);
    }

    width = sel(selector).dataset.width;
    sel(selector).style.width = width;

    target = sel(selector).dataset.target;
    interval = sel(selector).dataset.interval;
    images = document.querySelectorAll(selector + ' ' + target);

    var i = 1; // first image is already active, start with second
    setInterval(function () {
        if (i == images.length) { i = 0; }

        for (var j = 0; j < images.length; j++) {
            images[j].classList.remove('active');
        }

        images[i].classList.add('active');
        i++;
    }, interval);

})();

