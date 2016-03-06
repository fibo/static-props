# static-props

> defines static object attributes using Object.defineProperties

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

```
'use strict'

var staticProps = require('static-props')

class Point2d {
  constructor (x, y) {
    this.x = x
    this.y = y

    // Suppose you have few static attributes in your class.
    const label = 'A'
    const color = 'red'

    // Add static attributes quickly.
    staticProps(this)({label, color})
  }
}

var p = new Point(1, 2)

// Trying to modify a static prop will throw as you expect.
p.label = 'B'
// TypeError: Cannot assign to read only property 'label' of #<Point2d>
```

## License

[MIT](http://g14n.info/mit-license)
