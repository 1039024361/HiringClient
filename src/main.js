// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './assets/style/common.less' // global style
import { Input, Icon, Timeline, TimelineItem, Spin } from 'view-design'
Vue.component('Input', Input)
Vue.component('Icon', Icon)
Vue.component('Timeline', Timeline)
Vue.component('TimelineItem', TimelineItem)
Vue.component('Spin', Spin)
// Vue.use(ViewUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
