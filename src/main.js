import Vue from 'vue'
import App from './App'
import './assets/weui.css'
// plugins: {
//   mapPlugin: {
//     version: "1.0.6",
//     provider: "wx5bc2ac602a747594"
//   }
// }
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
