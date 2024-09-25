let finish

//start the timer
function startTimer(){
    let second = document.querySelector("#timer-input").value

    finish = Date.now() + second * 1000
    intervalId = setInterval(checkRemainingTime, 50);
}

//stop the timer
function stopTimer(){

}

// loop checking remaining time
function checkRemainingTime(){
    let remain = finish - Date.now()

    if(remain <= 0){
        stopTimer()
        alert("時間になりました")
    }
}

//show remaining time
function setDisplay(){

}