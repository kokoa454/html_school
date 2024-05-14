const someDay = new Date(2020, 1, 13) // 2020年2月13日を指定しています

const dayNames = ["日", "月", "火", "水", "木", "金", "土"]
const youbi = dayNames[someDay.getDay()] // 曜日を取得します

console.log(
  someDay.getFullYear() + "年" +
  (someDay.getMonth() + 1) + "月" +
  someDay.getDate() + "日は" +
  youbi + "曜日です。"
) // 2020年2月13日は木曜日です
