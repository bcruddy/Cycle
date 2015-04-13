/**
 * Created by bruddy on 4/13/15.
 */
example = window.example || {};

example = {

    cycle: '',

    init: function () {

        this.cycle = new Cycle('.cycle');

        this.cycle.on('element:change', function (e) {
            console.log('[ Cycle | %s ]', e.type);
        });

        console.log(this.cycle);
    }
};
example.init();