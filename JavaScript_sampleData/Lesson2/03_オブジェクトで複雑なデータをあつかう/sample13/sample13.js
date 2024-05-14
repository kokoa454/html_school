let myThings = {}

Object.defineProperties(myThings, {
  sports: {
    enumerable: true,
    writable: true,
    value: "サッカー"
  },
  food: {
    enumerable: false,
    writable: false,
    value: "カレーライス"
  }
})

// enumerable 属性
console.log(Object.keys(myThings)) // ['sports']を表示します

// writable 属性
myThings.sports = "ラグビー"
console.log(myThings.sports) // ラグビーと表示します

myThings.food = "寿司" //←writableにfalseが指定された場合は代入は無効になります
console.log(myThings.food) // カレーライスと表示します
