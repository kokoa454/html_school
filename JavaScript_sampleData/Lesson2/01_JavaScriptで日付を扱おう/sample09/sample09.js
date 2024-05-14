// このコードはすべて2020年2月13日10時45分00秒を指します

const date1 = new Date(2020, 1, 13, 10, 45, 0, 0)
const date2 = new Date("2020-02-13T10:45:00") // 日付 + 時刻の文字列を指定します
const date3 = new Date(1581558300000)         // 1970年1月1日から経過したミリ秒を指定します

//date1、date2、date3を出力
console.log("1番目のDate：" + date1.getFullYear() + "年" + (date1.getMonth() + 1) + "月" + date1.getDate() + "日です。")
console.log("2番目のDate：" + date2.getFullYear() + "年" + (date2.getMonth() + 1) + "月" + date2.getDate() + "日です。")
console.log("3番目のDate：" + date3.getFullYear() + "年" + (date3.getMonth() + 1) + "月" + date3.getDate() + "日です。")