// 使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。
// 你必须把这些参数当做是任意或所有类型来使用

function identity<T>(arg: T): T {
  console.log(arg.length) // 报错，因为不是所有类型都有length属性，例如number类型
  return arg
}

function identity2<T>(arg: T[]): T[] {
  console.log(arg.length) // 没有报错，因为arg被声明为T[]泛型数组，数组是都有length的
  return arg
}
