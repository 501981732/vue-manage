import axios from 'axios'
import { baseUrl } from '../config/env.js'
import querystring from 'querystring'
const ax = axios.create({
  baseURL: baseUrl
})

ax.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  if (config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'get' ||
    config.method === 'delete' ||
    config.method === 'patch'  ) {
    // 请求时序列化参数
    // config.data = querystring.stringify(config.data)
  }
  if (window.localStorage.getItem('TOKEN')) {
    config.headers.Authorization = `${JSON.stringify(window.localStorage.getItem('TOKEN') || '')}`
  }
  return config;
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
ax.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default ax