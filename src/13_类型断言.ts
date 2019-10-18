// 不同于类型推断
// 当我们明确知道某个变量的类型时，就可以通过断言的形式来告诉ts，按照我们断言的类型来执行
// 语法有以下两种
// (<类型>值)
// (值 as 类型)   在tsx中只能使用这种

let someValue: any = '我明确知道someValue是字符串类型'

console.log((<string>someValue).length)
console.log((someValue as string).length)
