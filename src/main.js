import Vue from 'vue'
import App from './App.vue'
//vuex
import store from './assets/js/data.js'
//vue-router
import VueRouter from 'vue-router'
import router from './assets/js/router.js'
Vue.use(VueRouter);
//mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'
//axios
import axios from 'axios';
Vue.prototype.$http=axios;

//图标
import './assets/css/iconfont.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

//设置rem
function comrem(){
  let htmlwidth=document.documentElement.clientWidth;
  let html=document.getElementsByTagName("html")[0];
  html.style.fontSize=`${htmlwidth/5}px`;
}
comrem()
window.addEventListener('resize',comrem())


