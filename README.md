# static-props

> defines static object attributes using Object.defineProperties

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

Let's create a classic Point2d class and add constant attributes.

```
'use strict'

var staticProps = require('static-props')

class Point2d {
  constructor (x, y, label) {
    this.x = x
    this.y = y

    // Suppose you have few static attributes in your class.
    const color = 'red'

    // Add constant attributes quickly.
    staticProps(this)({label, color})
  }
}
```

After instantiating the class, we can check that `label` and `color` cannot be changed.

```
var p = new Point(1, 2)

// Trying to modify a static prop will throw as you expect.
p.label = 'B'
// TypeError: Cannot assign to read only property 'label' of #<Point2d>
```

## License

[MIT](http://g14n.info/mit-license)
