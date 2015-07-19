/**
 * Created by bruddy on 4/13/15.
 */
'use strict';

var ex = window.ex || {};

ex = {

    cycle: '',

    init: function () {

        this.cycle = new Cycle('.cycle');

        this.cycle.on('cycle:change', function (e) {
        	var cycleObject, data;

            cycleObject = e.detail.settings;
            data = e.detail.data;

            console.log(cycleObject, data);

            console.count();
        });

    },
};
ex.init();