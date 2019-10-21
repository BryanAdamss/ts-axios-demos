// 静态属性存在类本身，而不是实例上

class Grid {
  static origin = { x: 0, y: 0 }

  scale: number

  constructor(scale: number) {
    this.scale = scale
  }

  calcDistanceFromOrigin(point: { x: number; y: number }): number {
    const xD = point.x - Grid.origin.x
    const yD = point.y - Grid.origin.y

    return Math.sqrt(xD * xD + yD * yD) * this.scale
  }
}

const g1 = new Grid(1.0)
const g2 = new Grid(5.0)

console.log(g1.calcDistanceFromOrigin({ x: 3, y: 4 })) // 5
console.log(g2.calcDistanceFromOrigin({ x: 3, y: 4 })) // 25
