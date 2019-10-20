// 当一个接口继承类的类型时，会继承类的成员但不包括实现
// 就像接口声明了类的所有存在成员，但并没有提供具体实现
// 接口同样会继承private、protected成员；当一个接口继承了一个含有private、protected成员的类时，此接口只能被此类或其子类实现

class Control {
  private state: any
}

// 接口继承一个包含了私有成员的类，则此接口只能被Control或其子类实现
interface SelectableControl extends Control {
  select()
}

class Button extends Control implements SelectableControl {
  select() {}
}

// 非Control子类，无法实现SelectableControl接口
// 因为其无法实现私有的state属性，即使其在自身内部声明也不行
class Image2 implements SelectableControl {
  select() {}
}

// 但如果被继承的类，没有私有、受保护成员
// 则接口继承类，就像接口声明了所有类的成员
class Control2 {
  state: any
}

interface Selectable extends Control2 {
  select()
}

// 继承了Control2的类可以实现Selectable
class Im2 extends Control2 implements Selectable {
  select() {}
}

// 没有继承Control2的类，可以通过自己声明state，来实现Selectable
// 只有满足Selectable的形状即可
class Im3 implements Selectable {
  state: 3
  select() {}
}
