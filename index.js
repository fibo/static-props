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
    var statik = {}
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
module.exports = staticProps
