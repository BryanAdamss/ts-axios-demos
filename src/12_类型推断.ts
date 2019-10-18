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
