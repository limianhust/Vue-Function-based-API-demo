# 用 Vue Function-based API 重写你的组件的业务逻辑

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
## 什么是
## 这里举了两个例子，计数逻辑和分页逻辑相关业务逻辑封装在一个独立的模块中，与视图层分离。避免了 vue 2.0 的 mixin 导致的属性名或方法名命名冲突，模版中的数据来源不清晰等问题，独立而又显示的展示业务逻辑。

