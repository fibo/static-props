'use strict'

var test = require('tape')
var staticProps = require('./index')

class Point2d {
  constructor (x, y, label) {
    this.x = x
    this.y = y

    const color = 'red'

    staticProps(this)({label, color})
  }
}

staticProps(Point2d)({ dim: 2 })

test('staticProps', (t) => {
  t.plan(4)

  var p = new Point2d(1, 2, 'A')

  t.equal(p.label, 'A', 'assigns prop')
  t.equal(p.color, 'red', 'assigns prop')

  t.throws(() => { p.label = 'B' }, /TypeError: Cannot assign to read only property 'label' of #<Point2d>/, 'static prop cannot be modified')

  t.equal(Point2d.dim, 2, 'assigns static attribute')
})
