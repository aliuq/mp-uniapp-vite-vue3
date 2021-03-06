# Uniapp

一套使用 Uniapp + Vite + Vue3 + TypeScript 的初始化模板，在此基础上增加了一些配置好的库，方便快速进行开发。

+ uniapp: v3.0 alpha
+ vite: v2.9.10

## 功能

自动引入 + Typescript 类型声明，可以非常方便的进行开发

+ [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import): 自动按需引入 uni 生命周期
+ [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components): 自动引入组件
+ [`unocss`](https://github.com/unocss/unocss): unocss 原子化 css 引擎
+ [`pinia`](https://github.com/vuejs/pinia): 状态管理
+ [`unocss - presetIcons`](https://github.com/unocss/unocss/tree/main/packages/preset-icons): 提供丰富的 SVG 图标，简单易用易扩展
+ [`vueuse/core`](https://github.com/vueuse/vueuse): 一组高效的 Composition API 集合

> 注意事项
>
> + 由于小程序限制，vueuse 和元素有关的 API 都不能使用，但是，部分和 Vue 相关的 API 可以使用
> + 由于小程序限制，unocss 在页面上不能使用 Attributify 和出现非字母横线的 class 名称
> + 依赖升级可能会出现问题，出现问题请退回到现在的版本

## 文件结构

+ components: 公共组件
+ composables: 实用 API 集合
+ icons: 自定义图标
+ store: 状态管理

## 开发

```bash
npx degit aliuq/mp-uniapp-vite-vue3 .
pnpm run install
pnpm run dev:mp-weixin
pnpm run build:mp-weixin
```
