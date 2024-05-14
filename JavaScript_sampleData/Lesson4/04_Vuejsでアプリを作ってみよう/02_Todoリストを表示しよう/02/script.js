/** Vue アプリの生成 **/
function createApp() {
  new Vue({
    el: "#wrapper",
    data: {
      todos: [
        {
          id: 1, // 識別用の ID
          text: "みかんを買う", // テキスト
          createdAt: 1567940003455, // 登録日の Unix タイムスタンプ（ミリ秒）
          done: false // タスクが完了したかどうか
        }
      ]
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
