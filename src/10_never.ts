// never 表示永远不会发生值的类型，常用在函数主动抛出错误、永远返回一个错误、永远无法结束
// never是任何类型的子类型，可以赋值给任意类型，但其他类型不能赋值给never，包括any

// 主动抛出错误
function error(message: string): never {
  throw new Error(message)
}

// 永远返回一个错误时，会被推断成never类型
function fail() {
  return error('Something failed')
}

// 无法结束
function infiniteLoop(): never {
  while (true) {}
}

let r: never = 3 // 其他类型不能赋值给never类型
