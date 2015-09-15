/**
 * Created by bruddy on 4/13/15.
 */
'use strict';


var example = (function () {
    var cycle = new Cycle('.cycle', {
        captionPosition: 'bottom',
        captionColor: '#FF0000'
    });

    cycle.on('cycle:change', function (e) {
        var cycleObject, data;

        cycleObject = e.detail.settings;
        data = e.detail.data;

        console.log(cycleObject, data);
        console.count();
    });

    return {
        info: 'cycle started',
        cycle: cycle
    };

})();
console.log('----- CYCLE INFO -----');
console.log(example.info, example.cycle);
console.log('----- START CYCLE -----');
