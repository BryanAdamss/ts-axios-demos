// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型；
// 如果一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员；
// ! 联合类型是交集!!!不是并集!!!
// ! 交叉类型是并集!!!不是交集!!!

function alertMsg(msg: string | number): void {
  if (typeof msg === 'string') alert(msg)
  if (typeof msg === 'number') alert(String(msg))
}

alertMsg(1)
alertMsg('1')
alertMsg(true) // 报错

// 如果一个值是联合类型的，那我们只能访问他的共有成员
interface Bird {
  fly()
  makeBaby()
}

interface Fish {
  swim()
  makeBaby()
}

function getSmallPet(): Fish | Bird {
  return
}

let pet = getSmallPet()
pet.makeBaby()
pet.fly() // 非共有，所以报错；
