/**
 * Created by <brian at briancruddy dot com> on 4/12/15.
 */

var imageCycle = function (selector) {

    'use strict';

    function sel (selector) {
        return document.querySelector(selector);
    }

    if (!selector) { selector = '.image-cycle'; }

    var target, interval, width, speed, images, styleSheet;

    target = sel(selector).dataset.target || 'li';
    interval = sel(selector).dataset.interval || '2500';
    width = sel(selector).dataset.width || '300';
    speed = sel(selector).dataset.speed || '1000';
    images = document.querySelectorAll(selector + ' ' + target);
    styleSheet = (function() {
        var style = document.createElement('style');

        // webkit hack
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);

        return style.sheet;
    })();

    styleSheet.insertRule(selector + ' { max-width: 100%; position: relative; width: ' + width + 'px; }', 0);
    styleSheet.insertRule(selector + ' > * { position: absolute; top: 0; left: 0; z-index: 0; opacity: 0; transition: opacity 300ms }', 0);
    styleSheet.insertRule(selector + ' > .active { z-index: 1; opacity: 1; transition: opacity ' + speed + 'ms; }', 0);
    styleSheet.insertRule(selector + ' img { width: 100%; }', 0);

    var i = 1; // first image is already active, start with second
    setInterval(function () {
        if (i == images.length) { i = 0; }

        for (var j = 0; j < images.length; j++) {
            images[j].classList.remove('active');
        }

        images[i].classList.add('active');
        i++;
    }, interval);

};

