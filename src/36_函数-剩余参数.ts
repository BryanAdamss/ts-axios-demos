// 类似es6 剩余参数

// reset为一个number[]
function addOfRest(x: number, ...rest: number[]): number {
  return x + rest.reduce((acc, cur) => acc + cur, 0)
}

addOfRest(1, 2, 3, 4, 5) // 15
