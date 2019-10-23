// 下面函数作用是返回任何传入的值
// 可以使用any类型来实现
// 但any类型有个缺点，他会丢失类型
// 传入的一个number类型，返回一个string类型，同样可以通过类型检查(但我们本意是返回任何传入的值)
// 此时，我们就需要泛型
function identity(arg: any): any {
  return arg
}

// 使用泛型修改
function identity2<T>(arg: T): T {
  return arg
}
// 函数名后的尖括号代表可以接收一个在使用时再传入具体类型的泛型变量(此处泛型变量是T)
// arg参数及返回值的类型，都是在将来传入具体类型时确定的

// 泛型，可以理解为用一个表示类型的变量来表示将来将要接收到的具体类型
// 泛型变量一般用T表示

// 泛型变量 表示类型的一种变量
// 普通变量 表示值的一种变量

// 使用
// 主动指明泛型变量的类型
let output = identity2<number>(1) // T此时为number类型

let output2 = identity2('str') // 此时T被推断为string类型
