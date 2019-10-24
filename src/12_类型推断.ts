// 类型推断(推论)
// 类型推论是一个规则
// 适用于变量赋值时未指明类型
// 则在变量被赋值时根据赋的值类型，确定变量类型

let myFavoriteNumber = 'seven' // 因为被赋了string类型，所以myFavoriteNumber就被推断为string类型，再赋值number类型就会报错
myFavoriteNumber = 7

// 如果变量只声明未赋值，也未指定类型，则会被推断为any类型，可以被赋予任何类型
let a // 未指定值，也未指定类型，所以被推断为any类型
a = 'seven'
a = 7
a = false

// 最佳通用类型
// 当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型
let x = [0, 1, null]
// 为了推断x类型，必须考虑右侧数组的所有元素。计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。
// 此处x会被推断为一个联合类型  number | null
// 如果无法找到兼容所有类型的通用类型时，就会使用联合类型

// 一般类型推论都是通过右侧表达式，推断出左侧变量的类型
// 有时，也可以通过左侧类型，检测出右侧表达式的类型；这被叫做“按上下文归类”
// 上下文类型
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button) //<- Error
}
// 因为window.onmousedown的类型已经被ts在lib.d.ts中声明过，所以此处会检查出onmousedown函数入参中不会有button属性
