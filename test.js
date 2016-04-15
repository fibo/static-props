'use strict'

var test = require('tape')
var staticProps = require('./index')

class Point2d {
  constructor (x, y, label) {
    const color = 'red'

    const norm = () => x * x + y * y

    staticProps(this)({label, color, norm})

    var enumerable = true
    staticProps(this)({x, y}, enumerable)
  }
}

staticProps(Point2d)({ dim: 2 })

test('staticProps', (t) => {
  t.plan(9)

  var p = new Point2d(1, 2, 'A')

  t.equal(p.x, 1, 'assigns prop "x"')
  t.equal(p.y, 2, 'assigns prop "y"')
  t.equal(p.label, 'A', 'assigns prop "label"')
  t.equal(p.color, 'red', 'assigns prop "color"')
  t.equal(p.norm, 5, 'assigns prop "norm" with a getter')

  t.throws(() => { p.label = 'B' }, /TypeError: Cannot assign to read only property 'label' of #<Point2d>/, 'static prop cannot be modified')

  t.ok(p.propertyIsEnumerable('x'), 'prop "x" is enumerable')
  t.ok(p.propertyIsEnumerable('y'), 'prop "y" is enumerable')
  t.equal(Point2d.dim, 2, 'assigns static attribute')
})
