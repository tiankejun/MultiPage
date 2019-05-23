import axios from 'axios'
// import store from '@/store'
/**
 * 序列变化Object数据
 * @param  {Object} params 需要序列化的数据
 * @return {String}        序列化后的字符串 a=123&b=456&c=888
 */
let paramsSerializer = function (params) {
    let parts = []
    for (let key in params) {
        let val = params[key]
        if (val === null || typeof val === 'undefined') {
            continue
        }
        if (Array.isArray(val)) {
            val = JSON.stringify(val)
        }
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
    }
    let result = parts.join('&')
    return result
}

let instance = axios.create({
    // `url` 是用于请求的服务器 URL
    // url: '/user',

    // `method` 是创建请求时使用的方法
    // method: 'get', // 默认是 get

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    // baseURL: 'https://some-domain.com/api/',
    timeout: 60000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
    // `headers` 是即将被发送的自定义请求头
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json;charset=utf-8;'
    },

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    // params: {
    //     ID: 12345
    // },

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    // transformRequest: [function (data) {
    //     // 对 data 进行任意转换处理
    //     // 该方法可使post请求发送Form Data数据
    //     // 遍历对象
    //     let paramArr = []
    //     for ( var key in data ) {
    //         paramArr.push(key+"="+data[key])
    //     }
    //     return paramArr.join("&")
    // }],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data)
            } catch (e) { /* Ignore */ }
        }
        return data
    }],
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function (params) {
        return paramsSerializer(params)
    },
    // `onUploadProgress` 允许为上传处理进度事件
    onUploadProgress: function (progressEvent) {
        // 对原生进度事件的处理
    },
    // `onDownloadProgress` 允许为下载处理进度事件
    onDownloadProgress: function (progressEvent) {
        // 对原生进度事件的处理
    },
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
        return status >= 200 && status < 400 // 默认的 status >= 200 && status < 300;
    }
})

// request请求拦截器【可用于发送数据前进行数据加工】
instance.interceptors.request.use(config => {
    console.log(config)
    return config
}, error => {
    return Promise.reject(error)
})
// let isLoginTimeOutMsg = false
// respone数据返回拦截器【可用于全局判断登录是否过期】
instance.interceptors.response.use(response => {
    let result = response.data
    try {
        if (typeof result !== 'object') {
            result = JSON.parse(result)
        }
        // 需要知道登录过期时Message的内容是什么才能做判断
        if (result.resultCode !== 0) {
        } else {
        // isLoginTimeOutMsg = false
            return result
        }
        return result
    } catch (err) {
        return result
    }
}, error => {
    return Promise.reject(error)
})

export default instance
