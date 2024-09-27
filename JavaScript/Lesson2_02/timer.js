let finish
let intervalId
let startButton = document.querySelector("#start-button")
startButton.addEventListener("click", startTimer)
let stopButton = document.querySelector("#stop-button")
stopButton.addEventListener("click", stopTimer)

//start the timer
function startTimer(){
    let second = document.querySelector("#time-input").value

    finish = Date.now() + second * 1000
    intervalId = setInterval(checkRemainingTime, 50)

    startButton.disabled = true
}

//stop the timer
function stopTimer(){
    clearInterval(intervalId)
    setDisplay(0)

    startButton.disabled = false
}

// loop checking remaining time
function checkRemainingTime(){
    let remain = finish - Date.now()

    let second = Math.floor(remain / 1000) + 1
    setDisplay(second)

    if(remain <= 0){
        stopTimer()
        alert("時間になりました")
    }
}

//show remaining time
function setDisplay(second){
    let countDown = document.querySelector("#count-down")
    countDown.textContent = second
}