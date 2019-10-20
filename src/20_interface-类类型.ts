import { create } from 'domain'

// ts可以使用接口来明确类符合某种契约
interface ClockInterface {
  currentTime: Date

  setTime(d: Date): void
}

// 类实现了某个接口，就必须实现接口对应的属性和方法
class Clock implements ClockInterface {
  currentTime: Date

  constructor(h: number, m: number) {}

  setTime(d: Date) {
    this.currentTime = d
  }
}

// 接口实际上描述是多个类的公共功能

// 类的接口类型会有两种
// 1.实例接口类型(ClockInterface属于此种)
// 2.静态接口类型(例如类的构造器描述(构造器接口)就属于静态接口类型)

interface ClockConstructor {
  new (hour: number, minute: number) // 构造器签名
}

// 类无法实现一个静态接口类型
// 因为类实现一个接口，主要是检查其实例接口类型，对于静态接口类型直接报错
class Clock2 implements ClockConstructor {
  constructor(h: number, m: number) {}
}

// 那什么时候使用实例接口，什么时候使用构造器接口
interface TvInterface {
  show()
}

interface TvConstructor {
  new (w: number, h: number): TvInterface
}

// 将构造器接口使用在函数参数上就不会报错
function createTv(ctor: TvConstructor, w: number, h: number): TvInterface {
  return new ctor(w, h)
}

class BlackTv implements TvInterface {
  constructor(w: number, h: number) {}

  show() {
    console.log('black')
  }
}

class WhiteTv implements TvInterface {
  constructor(w: number, h: number) {}

  show() {
    console.log('white')
  }
}

const bTv: BlackTv = createTv(BlackTv, 100, 200)
const wTv: WhiteTv = createTv(WhiteTv, 200, 400)
