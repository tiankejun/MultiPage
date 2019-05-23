import instance from '@/api/index.js'
let getApisFn = function (apiList) {
    let apis = {}
    apiList.map((item) => {
        let name = item[0]
        let url = item[1]
        let type = item[2]
        if (type === 'post' || type === 'get') {
            apis[name] = function (params) {
                return instance[type](url, params).then(res => {
                    return Promise.resolve(res)
                }).catch(err => {
                    return Promise.reject(err)
                })
            }
        } else {
            apis[name] = function (params) {
                return instance.post(url, params).then(res => {
                    return Promise.resolve(res)
                }).catch(err => {
                    return Promise.reject(err)
                })
            }
        }
    })
    return apis
}
export default getApisFn
