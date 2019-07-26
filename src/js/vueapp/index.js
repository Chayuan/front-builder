import Vue from 'vue'
import VueApp from './vue-app.vue'

new Vue({
  el: '#vueapp',
  render: function(createElement) {
    return createElement(VueApp)
  }
})
