// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import echarts from "./echarts";
const app = createApp(App)

/***********************echart 挂载 START*******************************/

// echarts 挂载到 Vue实例中
// 注意：app.config.globalProperties 和 app.provide('$echarts', echarts) 二选一即可
// Vue.prototype.$echarts = echarts; // vue2的挂载方式

// app.config.globalProperties.$echarts = echarts; // vue3的挂载方式（一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。）

app.provide('$echarts', echarts); // vue3采用provide, inject方式使用

/***********************echart 挂载 END*******************************/


app.mount('#app')
