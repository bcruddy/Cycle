/**
 * Cycle - a dependency free javascript plugin
 *
 * Created by <brian at briancruddy dot com> on 4/12/15.
 * License: MIT (https://github.com/packofbadgers/Cycle/blob/master/LICENSE)
 * URL: https://github.com/packofbadgers/Cycle/
 *
 */


/**
 * Cycle
 *
 * @param selector
 * @returns {Cycle}
 * @constructor
 */
function Cycle (selector) {

    function _data(selector, attr) {
        return document.querySelector(selector).dataset[attr];
    }

    this.selector = selector || '.cycle';
    this.target = _data(selector, 'target') || 'li';
    this.interval = _data(selector, 'interval') || '2500';
    this.width = _data(selector, 'width') || '300';
    this.speed = _data(selector, 'speed') || '1000';
    this.images = document.querySelectorAll(selector + ' ' + this.target);

    this.style();
    this.render();

    return this;
}


/**
 * Render Cycle elements
 *
 * @event cycle:change - fires on each iteration/image change
 */
Cycle.prototype.render = function () {
    var _this = this,
        i = 1; // item at index 0 already active on init

    setInterval(function () {
        if (i === _this.images.length) { i = 0; }

        for (var j = 0; j < _this.images.length; j++) {
            _this.images[j].classList.remove('active');
        }

        _this.images[i].classList.add('active');
        i++;

        _this.fire('element:change');
    }, this.interval);
};


/**
 * Set initial Cycle style with params from constructor
 *
 * {width} - width of Cycle parent
 * {speed} - transition speed
 */
Cycle.prototype.style = function () {
    var styleSheet = (function() {
        var style = document.createElement('style');

        // webkit hack
        style.appendChild(document.createTextNode(''));

        document.head.appendChild(style);

        return style.sheet;
    })();

    styleSheet.insertRule(this.selector + ' { max-width: 100%; position: relative; width: ' + this.width + 'px; }', 0);
    styleSheet.insertRule(this.selector + ' > * { position: absolute; top: 0; left: 0; z-index: 0; opacity: 0; transition: opacity 300ms }', 0);
    styleSheet.insertRule(this.selector + ' > .active { z-index: 1; opacity: 1; transition: opacity ' + this.speed + 'ms; }', 0);
    styleSheet.insertRule(this.selector + ' img { width: 100%; }', 0);
};


/**
 * Set Cycle property
 *
 * @param property
 * @param value
 */
Cycle.prototype.set = function (property, value) {
    this[property] = value;
    this.fire('cycle:set');
};


/**
 * Get Cycle property
 *
 * @param property
 * @returns {*}
 */
Cycle.prototype.get = function (property) {
    return this[property];
};


/**
 * Fire Cycle event
 *
 * @param name
 */
Cycle.prototype.fire = function (name) {
    var event = new CustomEvent(name, {
        detail: {
            settings: this
        }
    });

    if (this.selector === event.detail.settings.selector) {
        document.dispatchEvent(event);
    }
};


/**
 * Listen for Cycle event
 *
 * @param event
 * @param callback
 */
Cycle.prototype.on = function (event, callback) {
    document.addEventListener(event, callback, false);
};
