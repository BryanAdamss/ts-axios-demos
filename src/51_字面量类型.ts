// 字面量类型允许你固定 变量 的值仅为几个固定的值
// ! 在声明变量类型的地方使用字符串、数字、布尔值字面量值时，代表变量仅接收对应字面量值，这样一个类型就称为字面量类型

let foo: 'Hello' // 类型处使用了'Hello'字面量，代表foo变量的值只能是'Hello'，不能是其他任何值
foo = 'Bar' // Error: 'bar' 不能赋值给类型 'Hello'

type OneToFive = 1 | 2 | 3 | 4 | 5 // OneToFive类型声明的变量将只能有12345几个值

let a: OneToFive = 5
let b: OneToFive = 6 // 报错，6无法赋值给

type Bools = true | false // Bools声明的变量仅有true、false值
let isFalsy: Bools = false
let isRight: Bools = 3 // 报错

// 使用字面量类型创建类似枚举类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out' // Easing
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // error: "uneasy" is not allowed here
