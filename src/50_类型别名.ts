// 类型别名主要用来给别的类型起一个新名字
// 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型
type Name = string // 给string类型起一个别名为Name类型
type NameResolver = () => string
type NameOrResolver = Name | NameResolver // 给联合类型起一个别名
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    // 存在类型保护机制
    // 所以此区块中n一定是Name类型了(即string类型)
    return n
  } else {
    return n()
  }
}

// ! 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。
// 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用

// 同接口一样，类型别名也可以是泛型 - 我们可以添加类型参数并且在别名声明的右侧传入
type Container<T> = { value: T }

// 也可以使用类型别名来在属性里引用自己
// 可用于树形结构
type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

// 交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型
type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
  name: string
}

var people: LinkedList<Person>
var s2 = people.name
var s2 = people.next.name
var s2 = people.next.next.name
var s2 = people.next.next.next.name

// 类型别名不能出现在自身声明右侧的任何地方
type Yikes = Array<Yikes> // 循环引用自身了

// ! 接口和类型别名的区别

// ! 接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字
// 比如，错误信息就不会使用别名

// 在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 aliased上时，显示的却是对象字面量类型
type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface

// ! 类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。
// 因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名
// 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名
