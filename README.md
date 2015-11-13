## Cycle

Cycle is a vanilla javascript plugin intended to cycle through images but will cycle through any set of elements.

Cycle injects it's own CSS at runtime, the whole thing is run and styled out of a single file.

### Usage

If using more than one instance of Cycle, each requires a unique selector. If using two instances on a single page, they need to be instantiated individually.

Selector defaults to `.cycle` if one is not given.

By default, Cycle runs automatically on page load. You can disable this by passing the option `autoRun: false` to the constructor.

If `autoRun` is `false`, getting Cycle started might look something like this: 
```
var cycle = new Cycle('.my-cycle', {
    autoRun: false,
    captionColor: 'rgba(0, 0, 0, 0.75)',
    speed: '1000'
});
cycle.style([arrayOfCustomRules]).init();
```

Options are set via an options object passed as a section parameter to the constructor or data-* attributes.

See `example/index.html` for a usage example.

### Options

Cycle's options can be set by an options object, data-* attributes, or falling back to the defaults. Available options are:

- `target` (`data-target`): elements targeted by Cycle (default: `li`)

- `interval` (`data-interval`): interval between changes in ms (default: `2500`)

- `width` (`data-width`): max width of the Cycle container (default: `300`)

- `speed` (`data-speed`): speed of transition between elements (default: `1000`)

- `captionPosition` (`data-caption-position`): top or bottom of the cycle element (default: `bottom`)

- `captionColor` (`data-caption-color`): caption color (default: `#333`)

- `captionBgColor` (`data-caption-bg`): caption background color (default: `rgba(255, 255, 255, 0.75)`)

### API

`style()` style injects the Cycle styling. It accepts an array of custom CSS rules that are appended to the bottom of the stylesheet, overriding any default cycle styling

`run()` starts to cycle infinite loop

`next()` render the next slide

`previous()` render the previous slide

`pause()` pause a Cycle instance

`resume()` resume a paused Cycle instance

`.on(event, callback)` attach event listener to Cycle object. Callback should accept two arguments, the first is the Cycle instance itself while the second is the actual event object.

### Events

Each cycle event object contains a `detail` parameter containing that instance's settings and a `data` object.

`cycle:run` fires whenever cycle starts for the first time

`cycle:next` fires whenever the next image is rendered

`cycle:previous` fires whenever the previous image is rendered

`cycle:pause` fires when cycle is paused

`cycle:resume` fires when cycle resumes

### Example

Clone/fork the repo and you the example directory is good to go.


### License

[MIT](https://github.com/bcruddy/Cycle/blob/master/LICENSE)
