## Classes
<dl>
<dt><a href="#Cycle">Cycle</a></dt>
<dd></dd>
</dl>
## Members
<dl>
<dt><a href="#utils">utils</a> : <code>Object</code></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#getDefaultOptions">getDefaultOptions([option])</a> ⇒ <code>*</code></dt>
<dd><p>Get Cycle&#39;s default settings</p>
</dd>
<dt><a href="#initSettings">initSettings(selector, [options])</a> ⇒ <code>*</code></dt>
<dd><p>Get a Cycle instance&#39;s settings. Priority level: options object passed to constructor -&gt; data-* attributes -&gt; defaults</p>
</dd>
<dt><a href="#activateItem">activateItem(items, index)</a></dt>
<dd><p>Assigns <code>active</code> class to item</p>
</dd>
<dt><a href="#removeClassFromElements">removeClassFromElements(elements, _class)</a></dt>
<dd><p>Remove <code>active</code> class from all cycle items</p>
</dd>
<dt><a href="#generateEmptyStyleSheet">generateEmptyStyleSheet()</a> ⇒ <code>*</code></dt>
<dd><p>Generates an empty stylesheet and appends it to the document <code>&lt;head&gt;</code></p>
</dd>
<dt><a href="#getDataAttribute">getDataAttribute(selector, attribute)</a> ⇒ <code>String</code></dt>
<dd><p>Gets a DOM element based on the <code>selector</code> and returns the <code>data-*</code> attribute or an empty string</p>
</dd>
<dt><a href="#toArray">toArray(arrayLike)</a> ⇒ <code>Array</code></dt>
<dd><p>Takes an array like object and returns the object in Array form</p>
</dd>
</dl>
<a name="Cycle"></a>
## Cycle
**Kind**: global class  

* [Cycle](#Cycle)
  * [new Cycle(selector, options)](#new_Cycle_new)
  * [.run()](#Cycle+run) ↩︎
  * [.delay(timeout, callback)](#Cycle+delay) ⇒ <code>[Cycle](#Cycle)</code>
  * [.pause()](#Cycle+pause) ⇒ <code>[Cycle](#Cycle)</code>
  * [.resume()](#Cycle+resume) ⇒ <code>[Cycle](#Cycle)</code>
  * [.next()](#Cycle+next) ⇒ <code>[Cycle](#Cycle)</code>
  * [.previous()](#Cycle+previous) ⇒ <code>[Cycle](#Cycle)</code>
  * [.style([customRules])](#Cycle+style) ⇒ <code>[Cycle](#Cycle)</code>
  * [.fire(name, data)](#Cycle+fire) ⇒ <code>[Cycle](#Cycle)</code>
  * [.on(eventType, callback)](#Cycle+on) ⇒ <code>[Cycle](#Cycle)</code>
  * [.handleHover()](#Cycle+handleHover) ⇒ <code>[Cycle](#Cycle)</code>

<a name="new_Cycle_new"></a>
### new Cycle(selector, options)

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> |  |
| options | <code>Object</code> | set options via arg object, data-* attrs, or just use the defaults |

<a name="Cycle+run"></a>
### cycle.run() ↩︎
Begins the cycle infinite loop

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  
**Void**:   
<a name="Cycle+delay"></a>
### cycle.delay(timeout, callback) ⇒ <code>[Cycle](#Cycle)</code>
Delay Cycle's loop

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| timeout | <code>Number</code> | Time in MS to delay Cycle |
| callback | <code>function</code> | Function to execute after delay |

<a name="Cycle+pause"></a>
### cycle.pause() ⇒ <code>[Cycle](#Cycle)</code>
Pause Cycle's loop

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  
<a name="Cycle+resume"></a>
### cycle.resume() ⇒ <code>[Cycle](#Cycle)</code>
Resume Cycle's loop

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  
<a name="Cycle+next"></a>
### cycle.next() ⇒ <code>[Cycle](#Cycle)</code>
Render the next item in Cycle.items

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  
<a name="Cycle+previous"></a>
### cycle.previous() ⇒ <code>[Cycle](#Cycle)</code>
Render the previous item in Cycle.items

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  
<a name="Cycle+style"></a>
### cycle.style([customRules]) ⇒ <code>[Cycle](#Cycle)</code>
**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  

| Param | Type |
| --- | --- |
| [customRules] | <code>Array</code> | 

<a name="Cycle+fire"></a>
### cycle.fire(name, data) ⇒ <code>[Cycle](#Cycle)</code>
Fire a Cycle event on `Cycle.element`

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Event name, automatically prefixed with "cycle:" |
| data | <code>\*</code> | Passed as first argument to Cycle's `on` method's callback |

<a name="Cycle+on"></a>
### cycle.on(eventType, callback) ⇒ <code>[Cycle](#Cycle)</code>
Listen for events on `Cycle.element`

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| eventType | <code>String</code> | Event name |
| callback | <code>function</code> | Function to be executed on event |

<a name="Cycle+handleHover"></a>
### cycle.handleHover() ⇒ <code>[Cycle](#Cycle)</code>
Event listener for hover events on the Cycle object

**Kind**: instance method of <code>[Cycle](#Cycle)</code>  
**Chainable**  
<a name="utils"></a>
## utils : <code>Object</code>
**Kind**: global variable  
<a name="getDefaultOptions"></a>
## getDefaultOptions([option]) ⇒ <code>\*</code>
Get Cycle's default settings

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [option] | <code>String</code> | Retrieve a specific Cycle option |

<a name="initSettings"></a>
## initSettings(selector, [options]) ⇒ <code>\*</code>
Get a Cycle instance's settings. Priority level: options object passed to constructor -> data-* attributes -> defaults

**Kind**: global function  

| Param | Description |
| --- | --- |
| selector | CSS selector to get `data-*` attributes from the `Cycle.element` |
| [options] | An object containing Cycle settings |

<a name="activateItem"></a>
## activateItem(items, index)
Assigns `active` class to item

**Kind**: global function  
**Void**:   

| Param | Type | Description |
| --- | --- | --- |
| items | <code>NodeList</code> | Collection of Cycle items |
| index | <code>Number</code> | Index to select item from collection |

<a name="removeClassFromElements"></a>
## removeClassFromElements(elements, _class)
Remove `active` class from all cycle items

**Kind**: global function  
**Void**:   

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>NodeList</code> | Collection of DOMElements |
| _class | <code>String</code> | Class to assign to `elements` |

<a name="generateEmptyStyleSheet"></a>
## generateEmptyStyleSheet() ⇒ <code>\*</code>
Generates an empty stylesheet and appends it to the document `<head>`

**Kind**: global function  
<a name="getDataAttribute"></a>
## getDataAttribute(selector, attribute) ⇒ <code>String</code>
Gets a DOM element based on the `selector` and returns the `data-*` attribute or an empty string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> | CSS selector to get `data-*` attributes from the `Cycle.element` |
| attribute | <code>String</code> | `data-*` attribute name to retrieve |

<a name="toArray"></a>
## toArray(arrayLike) ⇒ <code>Array</code>
Takes an array like object and returns the object in Array form

**Kind**: global function  

| Param | Description |
| --- | --- |
| arrayLike | An array like object (IE `arguments`) |

