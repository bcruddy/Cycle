/**
 * Cycle - a dependency free javascript plugin for cycling through images
 *
 * Created by <brian at briancruddy dot com> on 4/12/15.
 * License: MIT (https://github.com/bcruddy/Cycle/blob/master/LICENSE)
 * URL: https://github.com/bcruddy/Cycle/
 *
 */

'use strict';

/**
 * Usage:
 *      var cycle = new Cycle('selector');
 *          - OR -
 *      new Cycle('selector');
 *
 * @param selector
 * @returns {Cycle}
 * @constructor
 */
function Cycle (selector) {

    function _data(attr) {
        return document.querySelector(selector).dataset[attr];
    }

    var defaults = {
        selector: '.cycle',
        target: 'li',
        interval: '2500',
        width: '300',
        speed: '1000'
    };

    this.selector = selector || defaults.selector;
    this.target = _data('target') || defaults.target;
    this.interval = _data('interval') || defaults.interval;
    this.width = _data('width') || defaults.width;
    this.speed = _data('speed') || defaults.speed;
    this.images = document.querySelectorAll(this.selector + ' ' + this.target);

    this.init();

    return this;
}

/**
 *
 */
Cycle.prototype.init = function () {
    this.style(); // inject Cycle style

    var i = 1;

    setInterval((function () {
        if (this.images.length === i) i = 0;

        for (var j = 0; j < this.images.length; j++) {
            this.images[j].classList.remove('active');
        }

        this.images[i].classList.add('active');

        i++;
        this.fire('cycle:change');
    }).bind(this), this.interval);
};

/**
 *
 */
Cycle.prototype.style = function () {
    var styleSheet, rules;

    styleSheet = (function() {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode('')); // webkit hack
        document.head.appendChild(style);
        return style.sheet;
    })();

    rules = [
        this.selector + ' { max-width: 100%; position: relative; width: ' + this.width + 'px; }',
        this.selector + ' > ' + this.target + ' { position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 0; opacity: 0; transition: opacity 300ms; }',
        this.selector + ' > ' + this.target + ':first-child { position: static; }',
        this.selector + ' > .active { z-index: 1; opacity: 1; transition: opacity ' + this.speed + 'ms; }',
        this.selector + ' img { width: 100%; box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4); }'
    ];

    rules.forEach(function (rule) {
        styleSheet.insertRule(rule, 0);
    });
};

/**
 *
 * @param name
 */
Cycle.prototype.fire = function (name) {
    var event = new CustomEvent(name, {
        detail: { settings: this }
    });
    document.dispatchEvent(event);
};

/**
 *
 * @param event
 * @param callback
 */
Cycle.prototype.on = function (event, callback) {
    document.addEventListener(event, callback, false);
};
