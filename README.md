# MultiPage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 路由配置
1、每个页面都有一个router实例  
2、router文件下存储公共路由以及每个模块私有的路由  
3、每个页面的router.js中引用公共路由，以及各自的私有路由  

## 打开新页面传参方式
1、一般参数采用拼接字符串追加在指定页面后面通过问号（eg：index.html?aa=123&bb=345）进行传参  
2、重要数据或者隐私数据采用vuex方式存储
