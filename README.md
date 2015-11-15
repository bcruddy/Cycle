## Cycle

Cycle is a vanilla javascript plugin intended to cycle through images but will cycle through any set of elements.

Cycle injects it's own CSS at runtime, the whole thing is run and styled out of a single file.

Read the [docs file](https://github.com/bcruddy/Cycle/blob/master/docs.md) or see the JSDoc generated [github pages](https://bcruddy.github.io/Cycle)

### Usage

If using more than one instance of Cycle, each requires a unique selector. If using two instances on a single page, they need to be instantiated individually.

Selector defaults to `.cycle` if one is not given.

By default, Cycle runs automatically on page load. You can disable this by passing the option `autoRun: false` to the constructor.

If `autoRun` is `false`, getting Cycle started might look something like this: 

    var cycle = new Cycle('.my-cycle', {
        autoRun: false,
        captionColor: 'rgba(0, 0, 0, 0.75)',
        speed: '1000'
    });
    cycle.style([arrayOfCustomRules]).run();


Options are set via an options object passed as a section parameter to the constructor or data-* attributes.

See `example/index.html` for a usage example.

### Options

Cycle's options can be set by an options object, data-* attributes, or falling back to the defaults. Available options are:

`target` (`data-target`): elements targeted by Cycle (default: `li`)

`interval` (`data-interval`): interval between changes in ms (default: `2500`)

`width` (`data-width`): max width of the Cycle container (default: `300`)

`speed` (`data-speed`): speed of transition between elements (default: `1000`)

`captionPosition` (`data-caption-position`): top or bottom of the cycle element (default: `bottom`)

`captionColor` (`data-caption-color`): caption color (default: `#333`)

`captionBgColor` (`data-caption-bg`): caption background color (default: `rgba(255, 255, 255, 0.75)`),

`pauseOnHover` (`data-pause-on-hover`): Pause cycle when hovering `cycle.element`, resume when the mouse leaves `cycle.element`

### Properties

`element` An HTMLElement, this is the Cycle parent element. Use this for attaching non-cycle events.

`items` An Array of HTMLElements containing the cycle `target`s

`captions` An array of HTMLElements containing the captions

`active` An object initially containing the active index 


### Events

Each Cycle event emits the cycle instance as the callback's first parameter with the actual event itself as the second.

`cycle:run` fires whenever cycle starts for the first time

`cycle:next` fires whenever the next image is rendered

`cycle:previous` fires whenever the previous image is rendered

`cycle:pause` fires when cycle is paused

`cycle:resume` fires when cycle resumes

### Examples

Clone/fork the repo and you the example directory is good to go.


Using Cycle's events and API together:

    var cycle = new Cycle();
    
    cycle.on('cycle:run', function (instance, event) {
        instance.pause();
    });


Or, listen for other events:

    var cycle = new Cycle();
    
    cycle.element.addEventListener('mouseenter', function () {
        cycle.pause();
    });



### License

[MIT](https://github.com/bcruddy/Cycle/blob/master/LICENSE)
