let timeoutId = setTimeout(function () {
  console.log("5秒経過しました") //←すぐにclearTimeoutしているため実行されません
}, 5000)

clearTimeout(timeoutId)
