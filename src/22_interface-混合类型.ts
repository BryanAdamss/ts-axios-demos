// js 中一个对象可以拥有多个类型
// 例如函数，既可以做一个函数被调用，也可以当做一个对象使用其属性
interface Counter {
  (start: number): string // 函数签名

  interval: number //当做对象，拥有interval属性和reset方法

  reset()
}

function getCounter(): Counter {
  let counter = function(start: number) {
    return '' + start
  } as Counter // 必须强制断言成一个Counter类型，否则会报错

  counter.interval = 3
  counter.reset = () => {}

  return counter
}

let c = getCounter()
c(10)
c.interval = 100
c.reset()
