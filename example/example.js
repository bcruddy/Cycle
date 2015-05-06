/**
 * Created by bruddy on 4/13/15.
 */
'use strict';

var ex = window.ex || {};

ex = {

    cycle: '',

    init: function () {

        this.cycle = new Cycle('.cycle');
        // OR
        // new Cycle('.cycle');

        this.cycle.on('cycle:change', function () {
            console.log('Changed!');
        });

    }
};
ex.init();