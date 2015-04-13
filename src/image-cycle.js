/**
 * Created by <brian at briancruddy dot com> on 4/12/15.
 */

function sel (selector) {
    return document.querySelector(selector);
}

function Cycle (selector) {

    this.selector = selector || '.image-cycle';
    this.target = sel(selector).dataset.target || 'li';
    this.interval = sel(selector).dataset.interval || '2500';
    this.width = sel(selector).dataset.width || '300';
    this.speed = sel(selector).dataset.speed || '1000';
    this.images = document.querySelectorAll(selector + ' ' + this.target);

    this.style();
    this.init();

    return this;
}


Cycle.prototype.init = function () {
    var _this = this,
        i = 1; // first image is already active, start with second
    setInterval(function () {
        if (i === _this.images.length) { i = 0; }

        for (var j = 0; j < _this.images.length; j++) {
            _this.images[j].classList.remove('active');
        }

        _this.images[i].classList.add('active');
        i++;
    }, this.interval);
};


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


Cycle.prototype.set = function (property, value) {
    this[property] = value;
    this.init();
};


Cycle.prototype.get = function (property) {
    return this[property];
};


