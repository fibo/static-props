# static-props

> defines static object attributes using `Object.defineProperties`

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

**Table Of Contents:**

* [Installation](#installation)
* [Usage](#usage)
* [Annotated source](#annotated-source)
* [License](#license)

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install static-props --save
```

## Usage

Let's create a classic Point2d class and add constant attributes.

```javascript
'use strict'

var staticProps = require('static-props')

class Point2d {
  constructor (x, y, label) {
    // Suppose you have few static attributes in your class.
    const color = 'red'

    // Add constant attributes quickly.
    staticProps(this)({label, color})

    // Add enumerable attributes.
    var enumerable = true
    staticProps(this)({x, y}, enumerable)
  }
}
```

After instantiating the class, we can check that its props cannot be changed.

```javascript
var p = new Point2d(1, 2)

// Trying to modify a static prop will throw as you expect.
p.label = 'B'
// TypeError: Cannot assign to read only property 'label' of #<Point2d>
```

Attributes `x`, `y` were configured to be enumerable

```javascript
console.log(p) // Point2d { x: 1, y: 2 }
```

If you want to add a static attribute class, you can also do

```javascript
staticProps(Point2d)({ dim: 2 })
```

so you can access it with

```javascript
console.log(Point2d.dim) // 2
```

## Annotated source

API is `staticProps(obj)(props[, enumerable])`

	/**
	 * @param {Object} obj
	 * @returns {Function}
	 */
	
	function staticProps (obj) {
	  /**
	   * @param {Object} props
	   * @param {Boolean} [enumerable]
	   */

	  return function (props, enumerable) {

Since `static` is a reserved keywork, let's use `statik`

	    var statik = {}

Add every *prop* to *obj* as not writable nor configurable, i.e. **static**

	    for (var propName in props) {
	      var propValue = props[propName]
	
	      statik[propName] = {
	        value: propValue,
	        configurable: false,
	        enumerable: enumerable,
	        writable: false
	      }
	    }
	
	    Object.defineProperties(obj, statik)
	  }
	}

Export function

	module.exports = staticProps

## License

[MIT](http://g14n.info/mit-license)
