/**
 * Created by bruddy on 4/13/15.
 */
example = window.example || {};

example = {

    ex1: '',

    init: function () {

        this.ex1 = new Cycle('.cycle');

        this.ex1.on('element:change', function (e) {
            console.log('Cycle(\'%s\') fired %s', e.detail.settings.selector, e.type);
        });

    }
};
example.init();