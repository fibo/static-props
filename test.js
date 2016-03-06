'use strict'

var test = require('tape')
var staticProps = require('./index')

class Point2d {
  constructor (x, y) {
    this.x = x
    this.y = y

    // Suppose you have few static attributes in your class
    const label = 'A'
    const color = 'red'

    staticProps(this)({label, color})
  }
}

test('staticProps', (t) => {
  t.plan(2)

  var p = new Point2d(1, 2)

  t.equal(p.label, 'A', 'assigns prop')

  t.throws(() => { p.label = 'B' }, /TypeError: Cannot assign to read only property 'label' of #<Point2d>/, 'static prop cannot be modified')
})
