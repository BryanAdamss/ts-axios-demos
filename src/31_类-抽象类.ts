// 抽象类一般做为其他类的基类使用，其无法被实例化，只能被其它类继承
// 抽象类一般会包含抽象方法，抽象方法在抽象类中是不能被实例化的，需要在派生类中被实现

abstract class Animal {
  abstract makeSound(): void // 抽象方法可以定义访问修饰符
  // abstract makeSound2(): void{} // 抽象方法不能在抽象类中有实现部分，加了大括号，代表实现，所以报错

  // 成员方法是可以有实现的
  move(): void {
    console.log('move')
  }
}

// 有抽象方法的类一定是抽象类，抽象类不一定有抽象方法
// 当抽象类没有任何抽象方法时，其就像普通的类一样使用

// 更具体的例子
abstract class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printName(): void {
    console.log(this.name)
  }

  abstract printMeeting(): void // 定义一个抽象方法的签名，需要在派生类中被实现
}

class AccountDepartment extends Department {
  constructor() {
    super('会计部门')
  }

  // 实现抽象类方法
  printMeeting(): void {
    console.log('AccountDepartment 九点开会')
  }

  genReport(): void {
    console.log('生成报告')
  }
}

// const depart: Department = new Department() // 抽象直接创建实列会报错

const depart2: Department = new AccountDepartment()
depart2.printName()
depart2.printMeeting()
depart2.genReport() // 无法调用genReport，因为depar2已经被定义为Department类，然后Department中无genReport方法，所以报错
