let finish

/**
 * タイマーを開始する
 */
function startTimer() {
  let second = document.querySelector("#time-input").value

  // スタートした時刻とタイマーの時間を足した合計が終了時刻
  finish = Date.now() + second * 1000
}

/**
 * タイマーを終了する
 */
function stopTimer() {
}

/**
 * 残り時間をチェックする繰り返し
 */
function checkRemainingTime() {
}

/**
 * 残り時間を表示する
 */
function setDisplay(second) {
}
