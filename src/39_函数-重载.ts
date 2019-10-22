const arr = ['a', 'b', 'c', 'd']

// 通过声明多个函数头来描述重载列表
function pick(index: number): string
function pick(s: string): number
// 下面的pick不属于重载列表，其是函数的真正实现，真正实现要兼容重载列表中出现的情况；
// 重载列表仅用于编译检查；vscode会从上到下检查重载列表，所以最准确的定义写在前面
function pick(x: number | string): number | string {
  if (typeof x === 'number') return arr[x]
  if (typeof x === 'string') return arr.findIndex(item => item === x)
}

pick(3)
pick('a')
