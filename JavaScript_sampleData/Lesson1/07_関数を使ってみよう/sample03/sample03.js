function trimmingText(text){
  if (text.length >= 4) {
    return text.substring(0,3)
  }else{
    return text
  }
}
const myWord1 = "ぱいなっぷる"
const myWord2 = "サクランボ"
const newWord1 = trimmingText(myWord1)
const newWord2 = trimmingText(myWord2)
console.log(newWord1) //←ぱいな
console.log(newWord2) //←サクラ