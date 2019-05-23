import getApisFn from '@/api/apiTools.js'
let commonApisList = [
    ['aa', 'test/aa', 'post'],
    ['bb', 'test/bb', 'get']
]
export default getApisFn(commonApisList)
