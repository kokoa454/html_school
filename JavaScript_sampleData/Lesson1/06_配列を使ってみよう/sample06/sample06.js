const myFruits = ["りんご","みかん","すいか"]
let text = "私の好きな果物は"
myFruits.forEach(function(myFruit,i){
  text += myFruit
  if(i !== myFruits.length - 1){
    text += "と"
  }
})
text += "です。"
console.log(text)