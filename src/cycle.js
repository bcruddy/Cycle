/**
 * Cycle - a dependency free javascript plugin for cycling through images
 *
 * Created by <briancruddy at gmail dot com> @bcruddy
 * License: MIT (https://github.com/bcruddy/Cycle/blob/master/LICENSE)
 * URL: https://github.com/bcruddy/Cycle/
 *
 */

'use strict';

/**
 * @constructor {Cycle}
 * @param selector
 * @returns {Cycle}
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

    this.style().init();

    return this;
}

/**
 * Start Cycle, infinite loop
 * @void
 */
Cycle.prototype.init = function () {
    var nextIndex = 1;

    setInterval((function () {
        for (var j = 0; j < this.images.length; j++) {
            this.images[j].classList.remove('active');
        }

        nextIndex %= this.images.length;
        this.images[nextIndex].classList.add('active');
        nextIndex++;

        this.fire('cycle:change', { nextIndex: nextIndex });
    }).bind(this), this.interval);
};

/**
 * Inject CSS
 * @return {Cycle} [description]
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
        this.selector + ' { max-width: 100%; position: relative; width: ' + this.width + 'px; list-style: none; padding: 0; }',
        this.selector + ' > ' + this.target + ' { position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 0; opacity: 0; transition: opacity 300ms; }',
        this.selector + ' > ' + this.target + ':first-child { position: static; }',
        this.selector + ' > .active { z-index: 1; opacity: 1; transition: opacity ' + this.speed + 'ms; }',
        this.selector + ' img { width: 100%; box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4); }'
    ];

    rules.forEach(function (rule) {
        styleSheet.insertRule(rule, 0);
    });

    return this;
};

/**
 * Fire events
 * @param  {String} name  [description]
 * @param  {*} info       [description]
 * @return {Cycle}        [description]
 */
Cycle.prototype.fire = function (name, data) {
    var event = new CustomEvent(name, {
        detail: { 
            settings: this,
            data: data
        }
    });
    document.dispatchEvent(event);

    return this;
};

/**
 * Event listener
 * @param  {String}   event    [event name]
 * @param  {Function} callback [fn]
 * @return {Cycle}             [description]
 */
Cycle.prototype.on = function (event, callback) {
    document.addEventListener(event, callback, false);

    return this;
};
