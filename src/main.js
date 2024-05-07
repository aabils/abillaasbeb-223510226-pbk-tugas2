import { createApp } from 'vue'
import './style.css'
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');

createApp(App).mount('#app')
