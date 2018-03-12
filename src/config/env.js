/**
* 配置编译环境和线上环境
* baseUrl 域名地址
**/ 

const baseUrl = ''

if (process.env.NODE_ENV = 'development') {
    baseUrl = ''
} else if (process.env.NODE_ENV = 'development'){
    baseUrl = 'localhost:8001'
}

export {
    baseUrl
}