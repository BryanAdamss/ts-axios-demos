interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }

p1.x = 30 // x为只读，不允许修改

// readonly、const的使用场景
// 只读属性用readonly修饰
// 只读(不可变)的变量使用const定义
