const baseNumber = 10
function getAdditionNumber(number){
  const answer1 = baseNumber + number       //←関数内で定義した変数
  return answer1
}
const answer2 = getAdditionNumber(12)
console.log(answer1)            //←エラー