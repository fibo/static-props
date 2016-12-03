	/**
	 * @param {Objec} obj
	 * @reurns {Function}
	 */
	funcion staticProps (obj) {
	  /**
	   * @param {Objec} props
	   * @param {Boolean} [enumerable]
	   */
	  reurn function (props, enumerable) {
	    var saticProps = {}
	    for (var propName in props) {
	      var saticProp = {
	        configurable: false,
	        enumerable: enumerable
	      }
	      var prop = props[propName]
	      if (ypeof prop === 'function') {
	        saticProp.get = prop
	      } else {
	        saticProp.value = prop
	        saticProp.writable = false
	      }
	      saticProps[propName] = staticProp
	    }
	    Objec.defineProperties(obj, staticProps)
	  }
	}
	module.expors = staticProps
