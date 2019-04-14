# Wmusic

基于 electro-vue+docker(使用网易云音乐 API 的代理)实现的一个 pc 端应用程序。 基本功能和网易云音乐相同

> 这个只是我个人的一个业余的项目，最近很忙，也没时间完善，等过几天闲下来了就进行一次重构。
> 这个网易云音乐的接口我是使用的node.js版本的用docker跑，想要使用也很简单，首先下载docker 然后在命令行里输入
`docker pull binaryify/netease_cloud_music_api
docker run -d -p 3000:3000 --name netease_cloud_music_api    binaryify/netease_cloud_music_api `就OK！ 

#### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
