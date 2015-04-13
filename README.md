## imageCycle

imageCycle is a vanilla javascript plugin intended to cycle through images but can be used for pretty much anything.

### Usage

    <h2>Image Cycle Demo</h2>
    <div class="wrapper">
        <div class="half">
            <ul class="image-cycle" data-target="li" data-interval="2500" data-width="300" data-speed="1000">
                <li class="active" ><img src="images/ex1.jpg"/></li>
                <li><img src="images/ex2.jpg" /></li>
                <li><img src="images/ex3.jpg" /></li>
            </ul>
        </div>

        <div class="half">
            <ul class="image-cycle2" data-target="li" data-interval="3500" data-width="320" data-speed="2000">
                <li class="active" ><img src="images/ex1.jpg"/></li>
                <li><img src="images/ex2.jpg" /></li>
                <li><img src="images/ex3.jpg" /></li>
            </ul>
        </div>
    </div>
        
    <script src="/src/image-cycle.js"></script>
    <script>
        var ex1 = new Cycle('.image-cycle');
        ex1.set('interval', '2000'); // overrides 2500 set in data-attribute
        console.log(ex1.get('speed')); // returns and logs "2000"
    
        var ex2 = new Cycle('.image-cycle2');
    </script>

If using more than one instance of imageCycle, each requires a unique selector. If using two instances on a single page, they need to be instantiated twice, eg:

Selector defaults to `.image-cycle` if one is not given.

Options are set via data-attributes.

See `example/index.html` for a usage example.

### Options

imageCycle's options are controlled via data attributes on your target element. Available options are:

- target: elements targeted by imageCycle (default: `"li"`)

- interval: interval between changes in ms (default: `"2500"`)

- width: max width of the imageCycle container (default: `"300"`)

- speed: speed of transition between elements (default: `"1000"`)

### Methods

`.get(property)` retrieves a property's value

`.set(property, value)` sets a new value and re-instantiates the plugin.

### Example

Clone/fork the repo and you the example directory is good to go.

