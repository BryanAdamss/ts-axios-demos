// 泛型函数

function identify<T>(arg: T): T {
  return arg
}

// <T>(arg: T) => T 为泛型函数的类型
let fn: <T>(arg: T) => T = identify

// {<T>(arg: T) : T} 类型对象字面量，写法不同，意义同一面一样
let fn1: { <T>(arg: T): T } = identify

// 可以泛型函数的类型抽象成一个泛型接口
interface GenericIdentifyFn {
  <T>(arg: T): T
}

let fn2: GenericIdentifyFn = identify

// 还可以将泛型接口中的T做为接口的参数，那接口其他成员也可以使用T了
// 在使用时，需要传入泛型变量的值
interface GenericIdentifyFn2<T> {
  (arg: T): T
}

let fn3: GenericIdentifyFn2<number> = identify
