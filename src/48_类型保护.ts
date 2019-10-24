interface Bird {
  fly()
  makeBaby()
}

interface Fish {
  swim()
  makeBaby()
}

function getSmallPet(): Fish | Bird {
  return
}

let pet2 = getSmallPet()
pet2.makeBaby()
pet2.fly() // 非共有，所以报错；因为不知道pet2到底是Fish还是Bird

// 那如果想准确知道类型要怎么办?
// js中一般会判断属性或方法是否存在来确定类型（鸭子辩型）
// 类似下面的方法(会报错，因为ts已经推断出来fly、swim不属于共有成员)
// if (pet2.fly) {
//   pet2.fly()
// } else if (pet2.swim) {
//   pet2.swim()
// }

// 必须使用断言来告诉ts类型才不会报错
if ((pet2 as Bird).fly) {
  ;(pet2 as Bird).fly()
} else if ((pet2 as Fish).swim) {
  ;(pet2 as Fish).swim()
}

// 但上面方法会产生太多代码
// 此时使用到类型保护机制
// 主要有typeof、instance、in、字面量类型保护、自定义的类型保护
// 使用了上面几种形式后，在特定区块中，ts就知道变量具体是什么类型了，就不需要频繁使用断言了
// 并且他还知道对应的else中是什么类型

// typeof 主要保护
function doSome(x: number | string) {
  if (typeof x === 'string') {
    // ! 在此区块中，x被认定为string类型，调用任何string的方法都不会报错

    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    console.log(x.subtr(1)) // Error: 'subtr' 方法并没有存在于 `string` 上
    console.log(x.substr(1)) // ok
  }

  x.substr(1) // Error: 无法保证 `x` 是 `string` 类型
}

// instanceof
class Foo {
  foo = 123
  common = '123'
}

class Bar {
  bar = 123
  common = '123'
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    // ! 此区块中arg被认定为Foo类型，Foo的相关方法可以调用

    console.log(arg.foo) // ok
    console.log(arg.bar) // Error
  } else {
    // ! 因为if中arg是Foo，所以else中arg一定是Bar类型
    // ! 这个区块中arg一定是Bar类型，Bar的相关方法可以调用

    console.log(arg.foo) // Error
    console.log(arg.bar) // ok
  }
}

doStuff(new Foo())
doStuff(new Bar())

// in
interface A {
  x: number
}

interface B {
  y: string
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // ! q一定是A类型
    // q: A
  } else {
    // ! 此区块中q一定就是B类型了
    // q: B
  }
}

// 字面量类型保护
type Foo2 = {
  kind: 'foo' // 字面量类型
  foo: number
}

type Bar2 = {
  kind: 'bar' // 字面量类型
  bar: number
}

function doStuff(arg: Foo2 | Bar2) {
  if (arg.kind === 'foo') {
    // ! 判断了arg.kind为'foo'，那arg肯定就是Foo类型了
    console.log(arg.foo) // ok
    console.log(arg.bar) // Error
  } else {
    // ! 所以区块中arg一定就是Bar类型了
    console.log(arg.foo) // Error
    console.log(arg.bar) // ok
  }
}

// 自定义的类型保护
// 自定义的类型保护主要通过 类型谓词 来实现
// 类型谓词为 parameterName is Type这种形式
// parameterName必须是来自于当前函数签名里的一个参数名。

// 仅仅是一个 interface
interface Foo3 {
  foo: number
  common: string
}

interface Bar3 {
  bar: number
  common: string
}

// 自定义的类型保护
// arg is Foo3就是类型谓词
// 表示此函数的返回值所在区块一定是某种类型
function isFoo(arg: Foo3 | Bar3): arg is Foo3 {
  return (arg as Foo).foo !== undefined
}

// 用户自己定义的类型保护使用用例：
function doStuff2(arg: Foo3 | Bar3) {
  if (isFoo(arg)) {
    // ! 此区块中arg一定是Foo3类型
    console.log(arg.foo) // ok
    console.log(arg.bar) // Error
  } else {
    // ! 所以这个区块中arg一定是Bar3类型
    console.log(arg.foo) // Error
    console.log(arg.bar) // ok
  }
}

doStuff2({ foo: 123, common: '123' })
doStuff2({ bar: 123, common: '123' })
