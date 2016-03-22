/**
 * Created by bruddy on 4/13/15.
 */
'use strict';


var example = (function () {

    var cycle = new Cycle('.cycle', {
        captionPosition: 'bottom',
        captionColor: '#FF0000',
        autoRun: false
    });

    cycle.on('cycle:run', function (instance) {
        console.log('Cycle started');
    });

    cycle.on('delay', function (options) {
       console.log('delay!', options.instance, options.timeout) ;
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


    return cycle;

})();

example.cycle.run().delay(5000);
console.log('----- CYCLE INFO -----');
console.log(cycle);
console.log('----- START CYCLE -----');
