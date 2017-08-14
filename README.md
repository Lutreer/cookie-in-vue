# Cookie-in-vue
This is a vue plugin to oparate cookie,and it depend `js-cookie`


## Installation
```bash
npm install cookie-in-vue --save
```
### Usage
```javascript
import Vue from 'vue'
import VueCookie from 'cookie-in-vue'

Vue.use(VueCookie)

// somo.vue
export default new Vue({
  // ...
  methods: {
    setCookies(token) {
      this.$cookie.set('token', token, 7, 'localhost')
    },
    getSomeCookies() {
      this.$cookie.get('token')
    },
    removeSomeCookies(name) {
      this.$cookie.remove('token')
    }
  }
})

// other ways
VueCookie.set('token', token, 7, 'localhost')
VueCookie.get('token')
VueCookie.remove('token')

```

### All code
```javascript
import Cookies from 'js-cookie'

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value
  }

const VueCookie = {
  install(Vue, option) {
    Vue.prototype.$cookie = this
    Vue.cookie = this
  },
  set(name, value, expires, path) {
    if (expires && Number.isInteger(expires)) {
      console.error('Expires in VueCookie: Expected an integer value')
    }
    return Cookies.set(name, value, {expires: expires || 7, path: path || '/'})
  },
  get(name) {
    return Cookies.get(name)
  },
  remove(name, options) {
    let opts = {expires: -1}
    if (options !== undefined) {
      opts = Object.assign(options, opts)
    }
    this.set(name, '', opts)
  }
}
export default VueCookie



```