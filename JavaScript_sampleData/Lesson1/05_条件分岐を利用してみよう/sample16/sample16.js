const myWeather = "雪"
if(myWeather === "晴れ"){
  console.log("天気は晴れです")    //←出力されない
}else if(myWeather === "雨"){
  console.log("天気は雨です")      //←出力されない
}else{
  console.log("天気は晴れでも雨でもないです")     //←出力される
}