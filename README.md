## Cycle

Cycle is a vanilla javascript plugin intended to cycle through images but will cycle through any set of elements (parent element selector is passed into constructor while target children as passed as an option).

### Usage

If using more than one instance of imageCycle, each requires a unique selector. If using two instances on a single page, they need to be instantiated twice, eg:

Selector defaults to `.cycle` if one is not given.

Options are set via data-attributes.

See `example/index.html` for a usage example.

### Options

imageCycle's options are controlled via data attributes on your target element. Available options are:

- target: elements targeted by imageCycle (default: `li`)

- interval: interval between changes in ms (default: `2500`)

- width: max width of the imageCycle container (default: `300`)

- speed: speed of transition between elements (default: `1000`)

### API

`.on(event)` add event listener to Cycle object

### Events

Each cycle event object contains a `detail` parameter containing that instance's settings.

`cycle:change` fires each time a new image is rendered

### Example

Clone/fork the repo and you the example directory is good to go.

