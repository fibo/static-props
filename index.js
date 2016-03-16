function staticProps (obj) {
  return function (props) {
    var statik = {}

    for (var propName in props) {
      var propValue = props[propName]

      statik[propName] = {
        value: propValue,
        configurable: false,
        enumerable: false,
        writable: false
      }
    }

    Object.defineProperties(obj, statik)
  }
}

module.exports = staticProps
