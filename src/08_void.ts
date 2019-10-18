// 声明一个变量为void类型时，你只能将它赋值为 undefined 和 null，声明变量为void是没有意义的
let empty: void

empty = null
empty = undefined

// 常用于函数无返回值时
function print(msg: string): void {
  // 无返回值
  console.log(msg)
}
