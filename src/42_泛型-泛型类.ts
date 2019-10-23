class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

const n: GenericNumber<number> = new GenericNumber()
const n2 = new GenericNumber<string>()

n.zeroValue = 'str' // zeroValue已经被定义为number

n2.zeroValue = 'str'
n2.add = (x, y) => x + y
