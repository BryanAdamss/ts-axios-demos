interface StringArray {
  [index: number]: string // 代表使用number类型的索引可以得到一个string类型的返回值
}

const myArray: StringArray = ['a', 'b']

console.log(myArray[0])

// ts支持两种索引类型number和string
// 可以同时声明以上两种类型的索引
// 但是number索引类型返回值类型必须是string索引类型返回值类型的子类型
// 因为在js中所有索引类型，无论是number还是string，最终都会转化成string
// arr[0] === arr['0']
class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  [index: number]: Animal // 报错，因为Animal类型不是Dog类型的子类型
  [index: string]: Dog
}

// 字符串索引，可以很好的描述字典模式
interface NumberDict {
  [index: string]: number

  length: number

  name: string // name返回的类型同索引返回的类型是不一致的
}

// 索引签名可以设置为只读

interface ReadonlyStringArray {
  readonly [index: number]: string // 所有返回值都是只读的
}

const myArray2: ReadonlyStringArray = ['str', 'str2']
myArray2[1] = 'asdf' // Index signature in type 'ReadonlyStringArray' only permits reading.索引签名为只读状态
