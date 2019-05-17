let MyPlugin = {}
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    /**
     * @description 将url上的参数序列化成对象
     * @param window.location.search
     * @returns {aa: 123, bb:456, cc:789}
    */
    let serializeParams = function () {
        let params = {}
        let urlStr = window.location.search.indexOf('?') !== -1 ? window.location.search.split('?')[1] : ''
        if (urlStr) {
            let paramsArr = urlStr.split('&')
            paramsArr.map(item => {
                let tempArr = item.indexOf('=') ? item.split('=') : []
                if (tempArr.length) {
                    params[tempArr[0]] = tempArr[1]
                }
            })
            return params
        } else {
            return {}
        }
    }
    /**
     * @description 将参数对象反序列化成字符串
     * @param {aa: 123, bb:456, cc:789}
     * @returns "aa=123&bb=456&cc=789"
     *  */
    let getStringParams = function (params) {
        let resultParams = []
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                let parms = key + '=' + params[key]
                resultParams.push(parms)
            }
        }
        return resultParams.join('&')
    }
    // 获取url全部参数
    let getAllParams = function () {
        return serializeParams()
    }
    // 获取rul指定参数的值
    let getTargetParams = function (key) {
        let params = serializeParams()
        if (key) {
            let value = params[key] ? params[key] : ''
            return value
        } else {
            console.log(`not found value by ${key}`)
        }
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
    })

    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }
    Vue.prototype.$getAllParams = getAllParams
    Vue.prototype.$getStringParams = getStringParams
    Vue.prototype.$getTargetParams = getTargetParams
}

export default MyPlugin
