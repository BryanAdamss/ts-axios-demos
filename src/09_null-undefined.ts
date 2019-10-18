let u: undefined = undefined
u = undefined

let n: null = null
n = undefined

// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
// 子类型可以赋值给父类型
// 可在tsc编译时添加参数--strictNullChecks屏蔽将null、undefined赋值给其它类型
let num: number = undefined

// void类型变量无法赋值给其他类型
let v: void
num = v
