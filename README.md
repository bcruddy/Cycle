## imageCycle

imageCycle is a vanilla javascript plugin intended to cycle through images but can be used for pretty much anything.

### Usage

If using more than one instance of imageCycle, each requires a unique selector. If using two instances on a single page, they need to be instantiated twice, eg:

    <script src="/path/to/image-cycle.js"></script>
    <script>
        imageCycle('.firstInstance');
        imageCycle('.secondInstace');
    <script>

Selector defaults to `.image-cycle` if one is not given.

Options are set via data-attributes.

See `example/index.html` for a usage example.

### Options

imageCycle's options are controlled via data attributes on your target element. Available options are:

- target: elements targeted by imageCycle (default: "li")

- interval: interval between changes in ms (default: "2500"

- width: max width of the imageCycle container (default: "300")

- speed: speed of transition between elements (default: "1000")

### Example

Clone/fork the repo and you the example directory is good to go.

