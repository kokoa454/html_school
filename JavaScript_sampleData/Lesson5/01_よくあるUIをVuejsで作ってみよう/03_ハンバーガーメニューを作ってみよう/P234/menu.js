/** Vue アプリケーションの生成 **/
function createApp() {
  new Vue({
    el: "#app",
    data: {
      isOpenMenu: false,
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
