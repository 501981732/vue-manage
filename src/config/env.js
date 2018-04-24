/**
* 配置编译环境和线上环境
* baseUrl 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
**/ 

let baseUrl = '',
    routerMode = 'hash',
    imgBaseUrl;


if (process.env.NODE_ENV == 'development') {
    // baseUrl = ''
} else if (process.env.NODE_ENV == 'production'){
    baseUrl = 'https://group.mrourou.com'
    imgBaseUrl = ''
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl
}