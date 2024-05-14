const myWord1 = "ぱいなっぷる"
const myWord2 = "サクランボ"
let newWord1 = ""
let newWord2 = ""
if (myWord1.length >= 4) {
  newWord1 = myWord1.substring(0,3)
}else{
  newWord1 = myWord1
}
if (myWord2.length >= 4) {
  newWord2 = myWord2.substring(0,3)
}else{
  newWord2 = myWord2
}
console.log(newWord1) //←ぱいな
console.log(newWord2) //←サクラ