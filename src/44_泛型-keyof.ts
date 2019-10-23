// 存在以下场景
// 获取某个对象key对应的值
// 我们希望，key做为参数，必须要存在于obj上
// 例如obj有a、b、c三个属性，希望key传入d时会报错

// 可以使用泛型，配合keyof实现

function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = {
  a: 1,
  b: 2,
  c: 3
}

// 由于类型推断，T的类型被推断成了X的类型{a:number b:number c:number}
// keyof {a:number b:number c:number}的结果就是 'a' | 'b' | 'c'联合类型
// 所以K必须是'a' 'b' 'c'中一种
getProp(x, 'a')
getProp(x, 'b')
getProp(x, 'c')
getProp(x, 'd') // d不是x的一个key,所以报错
