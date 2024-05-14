const baseNumber = 10           //←関数外で定義した変数
function getAdditionNumber(number){
  const answer1 = baseNumber + number
  return answer1
}
const answer2 = getAdditionNumber(12)
console.log(answer2)            //←22