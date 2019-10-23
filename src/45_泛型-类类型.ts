// 类类型在工厂函数的应用
// create接收一个泛型变量T，返回一个T类型
// create有一个参数c，其是一个构造函数，构造函数返回T类型
function create<T>(c: { new (): T }): T {
  return new c()
}

// 更复杂的例子

class BeeKeeper {
  hasMask: boolean
}

class ZooKeeper {
  nametag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

// 泛型A继承于Animal
// c是构造函数，其返回A类型

// ! 注意
// new () => A是描述函数类型的
// { new (): T }也是描述函数类型用的
// 上面返回值类型是=>
// 下面是在类型字面量时，所以返回值类型前面是冒号
// 关于这个可参考33_函数-基本示例章节

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag // typechecks!
createInstance(Bee).keeper.hasMask // typechecks!
