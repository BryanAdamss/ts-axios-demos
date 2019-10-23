// 有时泛型太通用了，我们需要对泛型做一定的约束
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length) // 这里因为不是所有类型都有length，所以报错
  return arg
}

// 解决上面的报错，可以让T类型强制包含一个length，这样就相当于对T类型做了一定的约束
// T继承于{ length: number }，所以T必须要包含一个number类型的length属性，所以解决了报错
function loggingIdentity2<T extends { length: number }>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 可以抽成一个接口
interface ILengthwise {
  length: number
}

function loggingIdentity3<T extends ILengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity3(123) // 123不包含length属性
loggingIdentity3([1, 2, 3]) // array 包含length属性
loggingIdentity3({ length: 10 }) // 包含length属性的对象
