import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnLvRdsXbL87_AaDSYdGLAFdyNwQKbr3Y',
    libraries: 'places'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
