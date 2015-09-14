/**
 * Cycle - a dependency free javascript plugin for cycling through images
 *
 * Created by <briancruddy at gmail dot com> @bcruddy
 * License: MIT (https://github.com/bcruddy/Cycle/blob/master/LICENSE)
 * URL: https://github.com/bcruddy/Cycle/
 *
 */

'use strict';

var cycle = (function () {

    return {
        getDataAttribute: function (selector, attribute) {
            var target = document.querySelector(selector);

            if (target.dataset.hasOwnProperty(attribute)) {
                return target.dataset[attribute]
            }

            return false;
        },

        getDefaultOptions: function (option) {
            var defaults = {
                selector: '.cycle',
                target: 'li',
                interval: '2500',
                width: '300',
                speed: '1000',
                captionPosition: 'bottom',
                captionColor: '#333',
                captionBgColor: 'rgba(255, 255, 255, 0.75)'
            };

            return !option ? defaults : defaults[option];
        },

        getChildItems: function (parentSelector, targetSelector) {
            var selector = [parentSelector, targetSelector].join(' ');

            return document.querySelectorAll(selector);
        },

        removeClassFromElements: function (elements, _class) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove(_class);
            }
        },

        makeNextItemActive: function (items, index) {
            index %= items.length;
            items[index].classList.add('active');
        },

        generateEmptyStyleSheet: function () {
            var style = document.createElement('style');

            style.appendChild(document.createTextNode('')); // webkit hack
            document.head.appendChild(style);

            return style.sheet;
        }
    };

})();

/**
 * @constructor {Cycle}
 * @param selector
 * @returns {Cycle}
 */
function Cycle (selector) {

    var defaults = cycle.getDefaultOptions();

    this.selector = selector || defaults.selector;
    this.target = cycle.getDataAttribute(selector, 'target') || defaults.target;
    this.interval = cycle.getDataAttribute(selector, 'interval') || defaults.interval;
    this.width = cycle.getDataAttribute(selector, 'width') || defaults.width;
    this.speed = cycle.getDataAttribute(selector, 'speed') || defaults.speed;

    this.captionPosition = cycle.getDataAttribute(selector, 'captionposition') || defaults.captionPosition;
    this.captionColor = cycle.getDataAttribute(selector, 'captioncolor') || defaults.captionColor;
    this.captionBgColor = cycle.getDataAttribute(selector, 'captionbg') || defaults.captionBgColor;

    this.items = cycle.getChildItems(selector, this.target);
    this.captions = cycle.getChildItems(selector, '.cycle-caption');

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
        cycle.removeClassFromElements(this.items, 'active');
        cycle.makeNextItemActive(this.items, nextIndex++);

        this.fire('cycle:change', { nextIndex: nextIndex });
    }).bind(this), this.interval);
};

/**
 * Inject CSS
 * @return {Cycle} [description]
 */
Cycle.prototype.style = function () {
    var styleSheet, rules;

    styleSheet = cycle.generateEmptyStyleSheet();

    rules = [
        this.selector + ' { max-width: 100%; position: relative; width: ' + this.width + 'px; list-style: none; padding: 0; }',
        this.selector + ' > ' + this.target + ' { position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 0; opacity: 0; transition: opacity 300ms; }',
        this.selector + ' > ' + this.target + ':first-child { position: static; }',
        this.selector + ' > .active { z-index: 1; opacity: 1; transition: opacity ' + this.speed + 'ms; }',
        this.selector + ' img { width: 100%; box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4); }'
    ];

    if (this.captions.length > 0) {
        rules.push(this.selector + ' .cycle-caption { position: absolute; left: 0; right: 0; padding: 5px 10px; ' + this.captionPosition + ': 4px; background-color: ' + this.captionBgColor + '; color: ' + this.captionColor + ' }');
    }

    rules.forEach(function (rule) {
        styleSheet.insertRule(rule, 0);
    });

    return this;
};

/**
 * Fire events
 * @param  {String} name  [description]
 * @param  {*} data       [description]
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
