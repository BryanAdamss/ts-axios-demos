// public(默认值，未写修饰符默认为public) 公共的，类内部外部都可以访问
// private  私有的，仅有当前类能内部访问，无法在实例上访问
// protected  受保护的，仅有当前类内部及子类内部可以访问;其还可以修饰构造函数，修饰构造函数时，实例化只能在派生类内部进行
class Animal2 {
  private _name: string

  constructor(name: string) {
    this._name = name
  }
}

const a = new Animal()
a._name

class Animal3 {
  protected _name: string

  constructor(name: string) {
    this._name = name
  }
}

class Animal4 extends Animal3 {
  constructor(name: string) {
    super(name)
    console.log(super._name)
  }
}

const a4 = new Animal4('123')
a4._name
