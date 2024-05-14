/** Vue アプリケーションの生成 **/
function createApp() {
  new Vue({
    el: "#app",
    data: {
      // フラグを追加する
      isOpenModal: false,
    },
    methods: {
      // モーダルを開く
      openModal() {
        this.isOpenModal = true
      },
      // モーダルを閉じる
      closeModal() {
        this.isOpenModal = false
      }
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
