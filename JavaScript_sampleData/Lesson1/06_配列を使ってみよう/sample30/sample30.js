const myFruits = ["りんご","いちご","ぱいなっぷる"]
const notThreeLengthFruit = myFruits.find(function(fruit){
  return fruit.length !== 3
})
console.log(notThreeLengthFruit)        //←ぱいなっぷる