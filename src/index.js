/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function () {

  const Cookies = require('js-cookie')

  Number.isInteger = Number.isInteger || function(value) {
      return typeof value === 'number' && isFinite(value) &&
        Math.floor(value) === value
    }

  const VueCookie = {
    install(Vue, option) {
      Vue.prototype.$cookie = this
      Vue.cookie = this
    },
    set(name, value, expires, path) {
      if (expires && Number.isInteger(expires)) {
        if(expires > 0) {
          return Cookies.set(name, value, {expires: expires || 7, path: path || '/'})
        }
      } else {
        console.error('Expires in VueCookie: Expected an integer value')
      }

    },
    get(name) {
      return Cookies.get(name)
    },
    remove(name, path) {
      this.set(name, '', -1, path)
    }
  }
  if (typeof exports == "object") {
    module.exports = VueCookie;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return VueCookie; })
  } else if (window.Vue) {
    window.VueCookie = VueCookie;
    Vue.use(VueCookie);
  }
})()


