/**
 * Created by bruddy on 4/13/15.
 */
example = window.example || {};

ex = {

    cycle: '',

    init: function () {

        this.cycle = new Cycle('.cycle');

        this.cycle.on('cycle:change', function (e) {});

        this.cycle.on('cycle:set', function (e) {});

        this.cycle.on('cycle:render', function (e) {});

        console.log(this.cycle);
    }
};
ex.init();