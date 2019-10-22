// 函数声明
function add(x: number, y: number): number {
  return x + y
}

// 函数表达式，内联类型
const add2 = function(x: number, y: number): number {
  return x + y
}

// 箭头函数，内联类型
const add3 = (x: number, y: number): number => {
  return x + y
}

// 箭头函数，等号左侧为函数类型；等号右侧的实现部分参数、返回值类型会自动推断出来
// ! 注意在非type、interface中定义函数类型时，返回值类型前面符号是=>
const add4: (num: number, otherNum: number) => number = (x, y) => x + y

// 完整的函数类型
const add5: (num: number, otherNum: number) => number = (
  x: number,
  y: number
) => x + y

// ! 注意在type、interface中定义函数类型时，返回值类型前面符号是冒号
// 定义类型
type add = {
  (num: number, otherNum: number): number
}

const add6: add = (x, y) => x + y

// 用接口定义函数类型
interface IAdd {
  (num: number, otherNum: number): number
}

const add7: IAdd = (x, y) => x + y
