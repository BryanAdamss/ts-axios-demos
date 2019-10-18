// 当不知道变量类型时可以使用any类型，当使用any类型时，tyepscript其实是不检查的
// 如果ts中全部使用any类型，那就等于还是在写js
let a: any = 3
a = 'str'
a = true

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let b
b = 3
b = 'str'
b = true
