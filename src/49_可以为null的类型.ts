// TypeScript具有两种特殊的类型， null和 undefined，它们分别具有值null和undefined.
// 默认情况下，类型检查器认为 null与 undefined可以赋值给任何类型。 null与 undefined是所有其它类型的一个有效值。

// 使用--strictNullChecks标记后，值null只能赋值给null类型和void类型，值undefined只能赋值给undefined类型和void类型

// 启用--strictNullChecks标记后(编译时才能看到错误，vscode中strictNullChecks默认不开启)
let s = 'foo'
s = null // 错误, 'null'不能赋值给'string'
let sn: string | null = 'bar'
sn = null // 可以
sn = undefined // error, 'undefined'不能赋值给'string | null'

// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:
function f(x: number, y?: number) {
  return x + (y || 0)
}
f(1, 2)
f(1)
f(1, undefined)
f(1, null) // null 无法赋值给 'number | undefined'

// 由于可以为null的类型是通过联合类型实现，那么你需要使用类型保护来去除 null
// 这与在JavaScript里写的代码一致
function f2(sn: string | null): string {
  if (sn == null) {
    // 此区块中sn为null类型了
    return 'default'
  } else {
    // 此区块中sn一定就为string类型了
    console.log(sn.length)

    return sn
  }
}

// 使用短路运算符，也可以显示的去除null
function f3(sn: string | null): string {
  return sn || 'default'
}

// 编译器无法去除嵌套函数的null（除非是立即调用的函数表达式）。 因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值
// 如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除
// 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined
function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '.  the ' + epithet // 报错 'name' 可能为null
  }
  name = name || 'Bob'
  return postfix('great')
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    // 断言name不为null、undefined
    return name!.charAt(0) + '.  the ' + epithet // ok
  }
  name = name || 'Bob'
  return postfix('great')
}
