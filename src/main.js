import { createApp } from 'vue'
import './style.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import App from './App.vue'

import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(ArcoVue);
app.use(pinia);
app.mount('#app');

