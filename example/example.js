/**
 * Created by bruddy on 4/13/15.
 */
'use strict';


var example = (function () {

    var cycle = new Cycle('.cycle', {
        captionPosition: 'bottom',
        captionColor: '#FF0000'
    });

    cycle.on('cycle:init', function (instance) {
        console.log('Cycle started');
    });

    cycle.on('cycle:next', function (instance, event) {
        console.log('next!');
    });

    cycle.on('cycle:previous', function (instance, event) {
        console.log('previous!');
    });

    cycle.on('cycle:pause', function (instance, event) {
        console.log('stopped!');
    });

    cycle.on('cycle:resume', function (instance, event) {
        console.log('resumed!');
    });


    return {
        info: 'cycle started',
        cycle: cycle
    };

})();
console.log('----- CYCLE INFO -----');
console.log(example.info, example.cycle);
console.log('----- START CYCLE -----');
