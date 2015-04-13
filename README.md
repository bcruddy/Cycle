## Cycle

Cycle is a vanilla javascript plugin intended to cycle through images but will cycle through any set of elements (parent element selector is passed into constructor while target children as passed as an option).

### Usage

    <h2>Image Cycle Demo</h2>
    <div class="wrapper">
        <div class="half">
            <ul class="cycle" data-target="li" data-interval="2500" data-width="300" data-speed="1000">
                <li class="active" ><img src="images/ex1.jpg"/></li>
                <li><img src="images/ex2.jpg" /></li>
                <li><img src="images/ex3.jpg" /></li>
            </ul>
        </div>

        <div class="half">
            <div class="p-cycle" data-target="p" data-interval="3500" data-width="200" data-speed="2000">
                <p class="active" style="width: 200px; height: 200px; background: red;">p 1</p>
                <p style="width: 200px; height: 200px; background: blue;">p 2</p>
                <p style="width: 200px; height: 200px; background: green;">p 3</p>
            </div>
        </div>
    </div>
        
    <script src="/src/cycle.js"></script>
    <script>
        var ex1 = new Cycle('.cycle');
        ex1.set('interval', '2000'); // override data-attribute
        console.log(ex1.get('speed')); // return & log "1000"
       
        ex1.on('element:change', function (e) {
            console.log('Cycle(\'%s\') fired %s', e.detail.settings.selector, e.type);
        });
    
        var ex2 = new Cycle('.p-cycle');
    </script>

If using more than one instance of imageCycle, each requires a unique selector. If using two instances on a single page, they need to be instantiated twice, eg:

Selector defaults to `.image-cycle` if one is not given.

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

`.get(property)` retrieves a property's value

`.set(property, value)` sets a new value and re-instantiates the plugin.

### Events

Each cycle event object contains a `detail` parameter containing that instance's settings.

`element:change` fires each time a new image is rendered

`cycle:set` fires each time the `.set()` method is called

### Example

Clone/fork the repo and you the example directory is good to go.

