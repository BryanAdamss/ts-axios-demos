// 接口同类一样，可以相互继承；可以从一个接口中复用一个成员到另外一个接口中
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square: Square = {
  color: 'red',
  sideLength: 100
}

// 一个接口可以继承多个接口
interface PenStroke {
  penWidth: number
}

// PenSquare接口继承了Shape、PenStroke
interface PenSquare extends Shape, PenStroke {
  bg: string
}

let penSquare: PenSquare = {
  bg: 'red',
  color: 'white',
  penWidth: 100
}
