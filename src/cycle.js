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
        /**
         * @param {String} selector
         * @param {String} attribute
         * @returns {String || Boolean}
         */
        getDataAttribute: function (selector, attribute) {
            var target = document.querySelector(selector);

            if (target.dataset.hasOwnProperty(attribute)) {
                return target.dataset[attribute]
            }

            return false;
        },

        /**
         * @param {String} option [if set, method only returns requested option]
         * @returns {*}
         */
        getDefaultOptions: function (option) {
            var defaults = {
                autoRun: true,
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

        /**
         * @param {String} parentSelector
         * @param {String} targetSelector
         * @returns {NodeList}
         */
        getChildItems: function (parentSelector, targetSelector) {
            var selector = [parentSelector, targetSelector].join(' ');

            return document.querySelectorAll(selector);
        },

        /**
         * @param {NodeList} elements
         * @param {String} _class
         * @void
         */
        removeClassFromElements: function (elements, _class) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove(_class);
            }
        },

        /**
         * @param {NodeList} items
         * @param {Number} index
         * @void
         */
        makeNextItemActive: function (items, index) {
            index %= items.length;
            items[index].classList.add('active');
        },

        /**
         * @returns {*}
         */
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
 * @param {String} selector
 * @param {Object} options [set options via arg object, data-* attrs, or just use the defaults]
 * @returns {Cycle}
 */
function Cycle (selector, options) {
    if (!options) options = {};

    var defaults = cycle.getDefaultOptions();

    this.autoRun = options.autoRun || defaults.autoRun;

    this.selector = selector || defaults.selector;
    this.target = options.target || cycle.getDataAttribute(selector, 'target') || defaults.target;
    this.width = options.width || cycle.getDataAttribute(selector, 'width') || defaults.width;
    this.interval = options.interval || cycle.getDataAttribute(selector, 'interval') || defaults.interval;
    this.speed = options.speed || cycle.getDataAttribute(selector, 'speed') || defaults.speed;

    this.captionPosition = options.captionPosition || cycle.getDataAttribute(selector, 'captionPosition') || defaults.captionPosition;
    this.captionColor = options.captionColor || cycle.getDataAttribute(selector, 'captionColor') || defaults.captionColor;
    this.captionBgColor = options.captionBgColor || cycle.getDataAttribute(selector, 'captionBg') || defaults.captionBgColor;

    this.items = cycle.getChildItems(selector, this.target);
    this.captions = cycle.getChildItems(selector, '.cycle-caption');

    if (this.autoRun)
        this.style().init();

    return this;
}

Cycle.prototype = {

    /**
     * Cycle infinite loop
     * @void
     */
    init: function () {
        var nextIndex = 1;

        setInterval((function () {
            cycle.removeClassFromElements(this.items, 'active');
            cycle.makeNextItemActive(this.items, nextIndex++);

            this.fire('cycle:change', { nextIndex: nextIndex });
        }).bind(this), this.interval);
    },

    /**
     * @param {Array} [customRules]
     * @returns {Cycle}
     */
    style: function (customRules) {
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

        if (!!customRules) {
            rules = customRules.concat(customRules);
        }

        rules.forEach(function (rule) {
            styleSheet.insertRule(rule, 0);
        });

        return this;
    },

    /**
     * @param {String} name
     * @param {*} data
     * @returns {Cycle}
     */
    fire: function (name, data) {
        var event = new CustomEvent('cycle:' + name, {
            detail: {
                settings: this,
                data: data
            }
        });
        document.dispatchEvent(event);

        return this;
    },

    /**
     * @param {String} event
     * @param {Function} callback
     * @returns {Cycle}
     */
    on: function (event, callback) {
        document.addEventListener(event, callback, false);

        return this;
    }

};
