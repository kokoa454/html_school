function checkUmbrella(weather){
  if(weather === "晴れ"){
    console.log("日傘が必要")
  }else if(weather === "雨"){
    console.log("雨傘が必要")
  }else{
    console.log("傘は不要")
  }
}

checkUmbrella("晴れ")        //←日傘が必要
checkUmbrella("雨")          //←雨傘が必要
checkUmbrella("曇り")        //←傘は不要
checkUmbrella("雪")          //←傘は不要