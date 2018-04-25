/**
    登录页面
*/ 

import ax from './axios.js'

// 登录接口
export const login = (data) => ax.post('/api/admin/user/_login',data)
export const getLogin = () => ax.get('/api/admin/user')