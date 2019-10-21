// 外部可以访问，但无法修改的属性可以用readonly修饰
// 被修饰的属性，只能在构造函数初始化时修改
class Person {
  readonly name: string

  constructor(name: string) {
    this.name = name
  }
}

let c = new Person('cg')

c.name = '123'
