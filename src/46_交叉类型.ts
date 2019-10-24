// 交叉类型可以理解为将多个类型合并成一个类型；
// ! 新合并的类型将是两个类型的并集!!!不是交集!!! 既有T类型的成员也有K类型的成员
// 合并时用 & 连接
// 例如用extend合并两个对象时，返回值的类型将是两个对象的交叉类型(返回值将包含两个对象类型的并集成员)
function extend<T, K>(first: T, second: K): T & K {
  let result = {} as T & K
  for (let id in first) {
    result[id] = first[id] as any // 由于T、K类型互相不兼容，编译时会报错，所以断言成any
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any
    }
  }
  return result
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
    console.log('hello')
  }
}

var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
jim.log()
